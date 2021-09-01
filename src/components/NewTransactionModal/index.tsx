import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react'
import { api } from '../../services/api'


interface NewTransactionModalprops {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalprops) {
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()

        const data = {
            title,
            value,
            category,
            type
        };

        api.post('/transaction', data)
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-ouverlay"
            className="react-modal-content"
        >
            <button
                onClick={onRequestClose}
                type="button"
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar Modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <p>Cadastar Transação</p>
                <form action="">
                    <input
                        placeholder="Título"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <input
                        placeholder="Valor"
                        value={value}
                        onChange={(event) => setValue(Number(event.target.value))}

                    />
                    <input
                        placeholder="Categoria"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                    />
                    <TransactionTypeContainer>
                        <RadioBox
                            type="button"
                            onClick={() => { setType('deposit') }}
                            isActive={type === 'deposit'}
                            activeColor="green"
                            value={category}
                        >
                            <img src={incomeImg} alt="Entrada" />
                            <span>Entrada</span>
                        </RadioBox>
                        <RadioBox
                            type="button"
                            onClick={() => { setType('withdrow') }}
                            isActive={type === 'withdrow'}
                            activeColor="red"
                        >
                            <img src={outcomeImg} alt="Entrada" />
                            <span>Saida</span>
                        </RadioBox>
                    </TransactionTypeContainer>
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </Container>

        </Modal>

    )
}
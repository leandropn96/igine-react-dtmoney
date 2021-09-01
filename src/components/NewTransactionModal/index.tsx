import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useState } from 'react'


interface NewTransactionModalprops {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalprops) {
    const [type, setType] = useState('deposit')

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
            <Container>
                <p>Cadastar Transação</p>
                <form action="">
                    <input placeholder="Título" />
                    <input
                        placeholder="Valor"
                    />
                    <input
                        placeholder="Categoria"
                    />
                    <TransactionTypeContainer>
                        <RadioBox
                            type="button"
                            onClick={() => { setType('deposit') }}
                            isActive={type === 'deposit'}
                            activeColor="green"
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
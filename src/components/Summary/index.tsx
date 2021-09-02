import { Container } from "./style";
import icomImg from '../../assets/income.svg'
import autcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
    const { transactions } = useTransactions()

    // const totalDeposits = transactions.reduce((acc, transaction) => {
    //     if (transaction.type === 'deposit') {
    //         return acc + transaction.amount
    //     }
    //     return acc

    // }, 0)
    const totalDeposits = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdraws += transaction.amount
            acc.total -= transaction.amount
        }
        return acc
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })
    return (
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img src={icomImg} alt="Entradas" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(totalDeposits.deposits)}</strong>
            </div>
            <div>
                <header>
                    <p>Saida</p>
                    <img src={autcomeImg} alt="Entradas" />
                </header>
                <strong>- {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(totalDeposits.withdraws)}</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(totalDeposits.total)}</strong>
            </div>
        </Container>
    )
}
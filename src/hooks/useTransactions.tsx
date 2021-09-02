import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../services/api'

interface Transaction {
    id: number,
    title: string,
    type: string,
    category: string,
    amount: number,
    createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionProviderProps {
    children: ReactNode;
}

interface TransactionsContextDate {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>
}

export const TransactionContext = createContext<TransactionsContextDate>(
    {} as TransactionsContextDate
)

export function TransactionProvider(props: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transaction', { ...transactionInput, createdAt: new Date() })
        const transaction = response.data.transactions
        console.log(transactions)
        // console.log(transaction)
        setTransactions([...transactions, transaction])

    };

    return (
        <TransactionContext.Provider value={{ transactions, createTransaction }}>
            {props.children}
        </TransactionContext.Provider>
    )
}

export function useTransactions() {
    const contex = useContext(TransactionContext)
    return contex
}
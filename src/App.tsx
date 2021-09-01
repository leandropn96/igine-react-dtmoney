import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { TransactionsTable } from './components/TransactionsTable';
import { NewTransactionModal } from './components/NewTransactionModal'
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal'
import { useState } from 'react';

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export function App() {
  const [isNerwTransactionModalOpen, setIsNerwTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNerwTransactionModalOpen(true)
  }

  function handleOpenCloseTransactionModal() {
    setIsNerwTransactionModalOpen(false)
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}></Header>
      <Dashboard></Dashboard>
      <NewTransactionModal
        isOpen={isNerwTransactionModalOpen}
        onRequestClose={handleOpenCloseTransactionModal} />

      <TransactionsTable></TransactionsTable>
      <GlobalStyle />
    </>
  );
};
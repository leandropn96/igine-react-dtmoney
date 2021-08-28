import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { TransactionsTable } from './components/TransactionsTable';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <Header></Header>
      <Dashboard></Dashboard>
      <TransactionsTable></TransactionsTable>
      <GlobalStyle />
    </>
  );
};
import ReduceCount from './ReduceCount';
import AddedCount from './AddedCount';
import './App.css';
import { NowCont, NowContProvider } from './CountContext';
import { useContext } from 'react';

function AppContent() {
  const { count } = useContext(NowCont); 

  return (
    <>
      <h2>Now Count : {count}</h2>
      <AddedCount />
      <ReduceCount />
    </>
  );
}

function App() {
  return (
    <NowContProvider>
      <AppContent />
    </NowContProvider>
  );
}

export default App;

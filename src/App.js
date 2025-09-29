import ReduceCount from './ReduceCount';
import AddedCount from './AddedCount';
import './App.css';
import { NowCont, NowContProvider } from './CountContext';
import { useContext } from 'react';

function AppContent() {
  const { count } = useContext(NowCont); 

  return (
    <>
    <div className='container'>
     <h2>Now Count : {count}</h2>
      <AddedCount />
      <ReduceCount />
    </div>      
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

import React, { useContext } from 'react';
import { NowCont } from './CountContext';

const AddedCount = () => {
  const { count, setCount } = useContext(NowCont); 

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};

export default AddedCount;

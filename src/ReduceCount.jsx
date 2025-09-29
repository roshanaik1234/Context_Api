import React, { useContext } from 'react'
import { NowCont } from './CountContext';

const ReduceCount = () => {

      const { count, setCount } = useContext(NowCont); 
  return (
    <>
      <button  className='reducedButton' onClick={() => setCount(count - 1)}>-1</button>
    </>
  )
}

export default ReduceCount

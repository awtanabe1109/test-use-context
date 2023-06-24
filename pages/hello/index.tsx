import ComponentA from '@/components/ComponentA'
import { createContext, useState, useContext} from 'react'
import Header from '@/components/Header';
import ButtonProider from '@/contexts/ButtonProider';

export const UserCount = createContext();

export default function Hello() {
  const [count, setCount] = useState(0)


  return (
    <div>
      <ButtonProider>
        <UserCount.Provider value={{count, setCount}}>
          <Header/> 
          <ComponentA/>
        </UserCount.Provider>
      </ButtonProider>
    </div>
  )
}

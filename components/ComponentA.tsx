import ComponentB from "./ComponentB"
import { useContext} from 'react'
import { ButtonContext } from "@/contexts/ButtonProider"

export default function ComponentA() {
  const { isButttonShow, setisButttonShow, targetData ,setTargetData} = useContext(ButtonContext)

  const handleHeaderClick = () => {
    setisButttonShow(!isButttonShow)
    setTargetData({url: '/saahoh'})
  }
  return (
    <div>
      ComponentA
      <button onClick={handleHeaderClick}>もだる開</button>
      <ComponentB/>
    </div>
  )
}

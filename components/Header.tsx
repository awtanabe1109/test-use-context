import Buttons from "./Buttons"
import { useContext } from "react"
import { ButtonContext } from "@/contexts/ButtonProider"

export default function Header() {
  const {isButttonShow} = useContext(ButtonContext)

  return (
    <>
      <p>header</p>
      {isButttonShow && <Buttons/>}
    </>
  )
}
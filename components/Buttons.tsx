import { useContext } from "react"
import { ButtonContext } from "@/contexts/ButtonProider"


export default function Buttons() {
  const { targetData } = useContext(ButtonContext);
  console.log(`targetData ${targetData}`)
  return (
    <>
        <div>
          <button>aaa</button>
        </div>
    </>
  )
}
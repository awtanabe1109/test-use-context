import ComponentC from "./ComponentC"
import { useContext } from "react"
import { UserCount } from "@/pages/hello"

export default function ComponentB() {
  const { count, setCount } = useContext(UserCount);
  return (
    <div>
      ComponentB
      <button onClick={() => setCount(count + 1)}>クリック</button>
      <ComponentC/>
    </div>
  )
}

import { useContext } from "react"
import { UserCount } from "@/pages/hello"

export default function ComponentC() {

  const { count, setCount } = useContext(UserCount);
  return (
    <div>
      ComponentC
      <p>{count}</p>
    </div>
  )
}

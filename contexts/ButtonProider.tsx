import { createContext, useState } from "react";

export const ButtonContext = createContext({});

export default function ButtonProider({ children }) {
  const [ targetData, setTargetData ] = useState({url: ''})
  const [isButttonShow, setisButttonShow] = useState(false);
  return (
    <>
    <ButtonContext.Provider
      value={{
        isButttonShow,
        setisButttonShow,
        targetData,
        setTargetData
      }}
    >
      {children}
    </ButtonContext.Provider>
    </>
  )
}
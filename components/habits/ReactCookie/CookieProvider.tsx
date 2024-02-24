"use client"
import { CookiesProvider } from "react-cookie"

type Props = {
    children: React.ReactNode
}

const CookieProvider = (props: Props) => {
  return (
    <CookiesProvider>
        {props.children}
    </CookiesProvider>
  )
}

export default CookieProvider
import React from 'react'
import AuthImage from './AuthImage'

type Props = {
    children: React.ReactNode,
}

const AuthContent = (props: Props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default AuthContent
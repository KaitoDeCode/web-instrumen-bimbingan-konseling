import React from 'react'

type Props = {
    children: React.ReactNode
}

const AuthContent = (props: Props) => {
  return (
    <div>
        {props.children}
    </div>
  )
}

export default AuthContent
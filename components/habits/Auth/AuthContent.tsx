import React from 'react'
import AuthImage from './AuthImage'

type Props = {
    children: React.ReactNode,
}

const AuthContent = (props: Props) => {
  return (
    <div className='bg-base-200 w-1/2'>
      {props.children}
    </div>
  )
}

export default AuthContent
import React from 'react'
import AuthImage from './AuthImage'
import AuthContent from './AuthContent'

type Props = {
    children: React.ReactNode,
    url: string
}

const AuthCard = (props: Props) => {
  return (
    <div className='flex min-h-[400px] w-[600px]'>
        <AuthImage url={props.url}/>
        <AuthContent>
            {props.children}
        </AuthContent>
    </div>
  )
}

export default AuthCard
import React from 'react'
import AuthImage from './AuthImage'
import AuthContent from './AuthContent'

type Props = {
    children: React.ReactNode,
    url: string,
    reverse: boolean,
}

const AuthCard = (props: Props) => {
  return (
    <div className={`flex min-h-[400px] w-[600px] ${ props.reverse ? 'flex-row-reverse' : 'flex-row'}`} >
        <AuthImage url={props.url}/>
        <AuthContent>
            {props.children}
        </AuthContent>
    </div>
  )
}

export default AuthCard
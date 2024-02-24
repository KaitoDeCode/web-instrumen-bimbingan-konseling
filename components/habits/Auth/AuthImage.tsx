import Image from 'next/image'
import React from 'react'

type Props = {
    url: string
}

const AuthImage = (props: Props) => {
  return (
    <div className='w-1/2 h-auto overflow-hidden rounded-md shadow-md'>
        <Image src={props.url} height={1000} width={1000} alt='Student'/>
    </div>
  )
}

export default AuthImage
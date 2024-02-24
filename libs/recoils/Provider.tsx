"use client"
import React from 'react'
import { RecoilRoot } from 'recoil'

type Props = {
    children: React.ReactNode,
}

const RecoilProvider = (props: Props) => {
  return (
    <RecoilRoot>
        {props.children}
    </RecoilRoot>
  )
}

export default RecoilProvider
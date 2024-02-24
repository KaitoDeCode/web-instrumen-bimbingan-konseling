"use client"
import React, { useEffect } from 'react'

type Props = {
    children: React.ReactNode
}

const ThemeShell = (props: Props) => {
    let theme = localStorage.getItem('theme');
    useEffect(() => {
        if (!theme) {
          localStorage.setItem('theme', 'corporate');
          theme = 'corporate';
        }
      }, [theme]);
  return (
    <div data-theme={theme}>
        {props.children}
    </div>
  )
}

export default ThemeShell
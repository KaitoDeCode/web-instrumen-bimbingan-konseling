"use client"
import { userState } from '@/libs/recoils/atom'
import { fetchWithEvent } from '@/utils'
import Link from 'next/link'
import React from 'react'
import { useRecoilState } from 'recoil'
import useSWR from 'swr'

type Props = {}

const LoginFragments = (props: Props) => {
  const [user,setUser]=useRecoilState(userState)
  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = {
      email: formData.get('email'),
      password: formData.get('password')
    };
    console.log(user)
    const response = await fetchWithEvent('/login','POST', {
      body: JSON.stringify(user)
    });
    if (response.ok) {
      const data = await response.json();
      setUser(data);
    } else {
      console.error('Gagal login');
    }
  }
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <form onSubmit={(e)=>handleSubmit(e)} method='post' className='p-5'>
          <h1 className='text-primary text-3xl font-bold'>Login</h1>
          <label className="input input-bordered flex items-center gap-2 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
            <input name='email' type="text" className="grow" placeholder="Email" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
            <input name='password' type="password" className="grow" placeholder='Password' />
          </label>
          <button className='btn btn-outline btn-primary mt-5 w-full rounded hover:text-white' type="submit">Login</button>
      </form>
      <span className='text-base-content text-center'>Don't have an account yet? <Link className='text-accent' href={'/register'}>Register!</Link></span>   
    </div>
  )
}

export default LoginFragments
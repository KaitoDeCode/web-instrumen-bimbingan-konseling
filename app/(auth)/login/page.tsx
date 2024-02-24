import { AuthCard, LoginFragments } from '@/components'
import { fetchWithEvent, setTitle } from '@/utils'
import { Metadata } from 'next'
import useSWR from 'swr'




export const metadata:Metadata = setTitle('Login')

type Props = {}

const page = (props: Props) => {

  const { data, error } = useSWR('/login', fetchWithEvent)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <AuthCard reverse={false} url='/img/student-5.jpg'>
        <LoginFragments/>
    </AuthCard>
  )
}



export default page
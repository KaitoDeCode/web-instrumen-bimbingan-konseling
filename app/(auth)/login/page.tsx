import { AuthCard } from '@/components'
import { setTitle } from '@/utils'
import { Metadata } from 'next'




export const metadata:Metadata = setTitle('Login')

type Props = {}

const page = (props: Props) => {
  return (
    <AuthCard reverse={false} url='/img/student-2.jpg'>
        <h1 className='text-primary'>Login</h1>
    </AuthCard>
  )
}

export default page
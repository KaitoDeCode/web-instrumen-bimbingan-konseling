import { AuthCard, LoginFragments } from '@/components'
import { setTitle } from '@/utils'
import { Metadata } from 'next'




export const metadata:Metadata = setTitle('Login')

type Props = {}

const page = (props: Props) => {
  return (
    <AuthCard reverse={false} url='/img/student-5.jpg'>
        <LoginFragments/>
    </AuthCard>
  )
}

export default page
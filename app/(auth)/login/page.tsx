import { AuthCard } from '@/components'
import { setTitle } from '@/utils'
import { Metadata } from 'next'




export const metadata:Metadata = setTitle('Login')

type Props = {}

const page = (props: Props) => {
  return (
    <AuthCard url='/img/student-2.jpg'>
        Hello
    </AuthCard>
  )
}

export default page
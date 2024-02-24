import { AuthCard } from '@/components'
import { setTitle } from '@/utils'
import { Metadata } from 'next'




export const metadata:Metadata = setTitle('Login')

type Props = {}

const page = (props: Props) => {
  return (
    <AuthCard>
        Hello
    </AuthCard>
  )
}

export default page
import { AuthCard } from '@/components'
import RegisterFragments from '@/components/molecules/Auth/RegisterFragments'
import { setTitle } from '@/utils'
import {Cookies} from 'react-cookie'

export const metadata = setTitle('Regiser')

type Props = {}

const RegisterPage = (props: Props) => {
  return (
    <AuthCard reverse={true} url='/img/student-2.jpg'>
      <RegisterFragments/>
    </AuthCard>
  )
}

export default RegisterPage
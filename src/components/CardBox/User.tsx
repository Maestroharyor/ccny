import { mdiCheckDecagram } from '@mdi/js'
import { Field, Form, Formik } from 'formik'
import { useAppSelector } from '../../stores/hooks'
import CardBox from '.'
import FormCheckRadio from '../Form/CheckRadio'
import PillTag from '../PillTag'
import UserAvatarCurrentUser from '../UserAvatar/CurrentUser'
import { RootState } from '@/stores/store'

type Props = {
  className?: string
}

const CardBoxUser = ({ className }: Props) => {
  const firstName = useAppSelector((state: RootState) => state.main.firstName)

  return (
    <CardBox className={className}>
      <div className="flex flex-col lg:flex-row items-center justify-around lg:justify-center">
        <UserAvatarCurrentUser className="mb-6 lg:mb-0 lg:mx-12" />
        <div className="space-y-3 text-center md:text-left lg:mx-12">
          <h1 className="text-2xl">
            Hello, <b>{firstName}</b>!
          </h1>
          <div className="flex justify-center md:block">
            <PillTag label="Admin" color="info" icon={mdiCheckDecagram} />
          </div>
        </div>
      </div>
    </CardBox>
  )
}

export default CardBoxUser

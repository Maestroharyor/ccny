import {
  mdiAccount,
  mdiAsterisk,
  mdiFormTextboxPassword,
  mdiGithub,
  mdiMail,
  mdiUpload,
} from '@mdi/js'
import { Formik, Form, Field } from 'formik'
import Head from 'next/head'
import type { ReactElement } from 'react'
import Button from '@/components/Button'
import Buttons from '@/components/Buttons'
import Divider from '@/components/Divider'
import CardBox from '@/components/CardBox'
import CardBoxComponentBody from '@/components/CardBox/Component/Body'
import CardBoxComponentFooter from '@/components/CardBox/Component/Footer'
import FormField from '@/components/Form/Field'
import FormFilePicker from '@/components/Form/FilePicker'
import LayoutAuthenticated from '@/layouts/Authenticated'
import SectionMain from '@/components/Section/Main'
import SectionTitleLineWithButton from '@/components/Section/TitleLineWithButton'
import CardBoxUser from '@/components/CardBox/User'
import type { UserForm } from '../../interfaces'
import { getPageTitle } from '@/config'
import { useAppSelector } from '@/stores/hooks'
import { RootState } from '@/stores/store'

const ProfilePage = () => {
  const user = useAppSelector((state: RootState) => state.main)
  const userEmail = useAppSelector((state: RootState) => state.main.email)

  const userForm: UserForm = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: userEmail,
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('Profile')}</title>
      </Head>

      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiAccount}
          title="Profile"
          main
        ></SectionTitleLineWithButton>

        <CardBoxUser className="mb-6" />

        <div className="grid grid-cols-1 gap-6">
          <div className="flex flex-col">
            {/* <CardBox className="mb-6">
              <FormField label="Avatar" help="Max 500kb">
                <FormFilePicker label="Upload" color="info" icon={mdiUpload} />
              </FormField>
            </CardBox> */}

            <CardBox className="flex-1" hasComponentLayout>
              <Formik
                initialValues={userForm}
                onSubmit={(values: UserForm) => alert(JSON.stringify(values, null, 2))}
              >
                <Form className="flex flex-col flex-1">
                  <CardBoxComponentBody>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField
                        label="First Name"
                        help="Required. Your first name"
                        labelFor="firstName"
                        icons={[mdiAccount]}
                      >
                        <Field name="firstName" id="firstName" placeholder="John" />
                      </FormField>
                      <FormField
                        label="Last Name"
                        help="Required. Your last name"
                        labelFor="lastName"
                        icons={[mdiAccount]}
                      >
                        <Field name="lastName" id="lastName" placeholder="Doe" />
                      </FormField>
                    </div>

                    <FormField
                      label="E-mail"
                      help="Required. Your e-mail"
                      labelFor="email"
                      icons={[mdiMail]}
                    >
                      <Field name="email" id="email" placeholder="E-mail" />
                    </FormField>
                  </CardBoxComponentBody>
                  <CardBoxComponentFooter>
                    <Buttons>
                      <Button color="info" type="submit" label="Submit" />
                      <Button color="info" label="Options" outline />
                    </Buttons>
                  </CardBoxComponentFooter>
                </Form>
              </Formik>
            </CardBox>
          </div>
        </div>
      </SectionMain>
    </>
  )
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default ProfilePage

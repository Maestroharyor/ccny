import { mdiAccount, mdiMail } from '@mdi/js'
import { Formik, Form, Field } from 'formik'
import Head from 'next/head'
import { useState, type ReactElement } from 'react'
import Button from '@/components/Button'
import Buttons from '@/components/Buttons'
import CardBox from '@/components/CardBox'
import CardBoxComponentBody from '@/components/CardBox/Component/Body'
import CardBoxComponentFooter from '@/components/CardBox/Component/Footer'
import FormField from '@/components/Form/Field'
import LayoutAuthenticated from '@/layouts/Authenticated'
import SectionMain from '@/components/Section/Main'
import SectionTitleLineWithButton from '@/components/Section/TitleLineWithButton'
import CardBoxUser from '@/components/CardBox/User'
import type { UserForm } from '../../interfaces'
import { getPageTitle } from '@/config'
import { useAppDispatch, useAppSelector } from '@/stores/hooks'
import { RootState } from '@/stores/store'
import { Popover, message } from 'antd'
import axios from 'axios'
import { logOut, setUser } from '@/stores/mainSlice'
import { useRouter } from 'next/router'
import CardBoxModal from '@/components/CardBox/Modal'

const SettingsPage = () => {
  const user = useAppSelector((state: RootState) => state.main)
  const userEmail = useAppSelector((state: RootState) => state.main.email)
  const dispatch = useAppDispatch()
  const [isUserUpdateLoading, setIsUserUpdateLoading] = useState(false)
  const [isUserAddLoading, setIsUserAddLoading] = useState(false)
  const [isAddUserModalActive, setIsAddUserModalActive] = useState(false)
  const router = useRouter()

  const userForm: UserForm = {
    userId: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: userEmail,
  }

  const updateUser = async (values: UserForm) => {
    setIsUserUpdateLoading(true)
    try {
      const { data } = await axios.put('/api/users/update', values)
      dispatch(setUser(data.data))
      message.success('Registration Successful')
    } catch (error) {
      message.error(
        error?.response?.data?.message ||
          error?.message ||
          error?.response?.message ||
          'An error occured'
      )
    } finally {
      setIsUserUpdateLoading(false)
    }
  }

  const logoutUserToReset = () => {
    dispatch(logOut())
    router.push('/reset-password')
  }

  const content = (
    <div className="flex flex-col md:flex-row gap-3">
      <Button color="info" label="Add New Admin" outline />
      <Button color="info" label="Reset Password" outline onClick={logoutUserToReset} />
    </div>
  )

  const handleModalAction = () => {
    setIsAddUserModalActive(false)
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('Profile')}</title>
      </Head>

      <CardBoxModal
        title="Please confirm"
        buttonColor="danger"
        buttonLabel="Confirm"
        isActive={isAddUserModalActive}
        onConfirm={handleModalAction}
        onCancel={handleModalAction}
      >
        <p>
          Lorem ipsum dolor sit amet <b>adipiscing elit</b>
        </p>
        <p>This is sample modal</p>
      </CardBoxModal>

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
              <Formik initialValues={userForm} onSubmit={(values: UserForm) => updateUser(values)}>
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
                      <Button
                        color="info"
                        type="submit"
                        label={isUserUpdateLoading ? 'Updating...' : 'Update Profile'}
                        disabled={isUserUpdateLoading}
                      />
                      <Popover content={content} trigger="click" placement="bottom">
                        <Button color="info" label="More Admin Options" outline />
                      </Popover>
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

SettingsPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default SettingsPage

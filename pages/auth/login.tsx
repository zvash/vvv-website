import { NextPage } from 'next'
import React, { useState } from 'react'
import { Box, LoginPageWrapper } from '../../styles/pages/auth/login'
import { useFormik } from 'formik'
import Input from '../../components/FormElements/Input/Input'
import PasswordInput from '../../components/FormElements/PasswordInput/PasswordInput'
import Button from '../../components/styled/Button'
import * as yup from 'yup'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { AxiosError } from 'axios'
import ErrorMessage from '../../components/styled/ErrorMessage'

const validationSchema = yup.object().shape({
    username: yup.string().required('This field is required'),
    password: yup.string().required('This field is required'),
})

const Login: NextPage = () => {

    const [error, setError] = useState('');
    const router = useRouter();

    const { handleSubmit, values, errors, touched, setFieldValue, setFieldTouched, isSubmitting, isValid } = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: async (values, actions) => {
            setError('')
            const result = await signIn('credentials', {
                redirect: false,
                username: values.username,
                password: values.password,
            })

            if (result?.error) {
                setError('Invalid username or password');
            }
            else {
                router.push('/');
                return;
            }
            actions.setSubmitting(false)
        },
        validationSchema
    })
    return (
        <LoginPageWrapper>
            <Box>
                <form onSubmit={handleSubmit}>
                    <Input
                        label='Identifier'
                        changed={(value) => setFieldValue('username', value)}
                        blurred={() => setFieldTouched('username')}
                        error={touched.username && errors.username}
                        value={values.username}
                        numberOnly
                    />
                    <PasswordInput
                        label='Password'
                        changed={(value) => setFieldValue('password', value)}
                        blurred={() => setFieldTouched('password')}
                        error={touched.password && errors.password}
                        value={values.password}
                    />
                    {error ? (<ErrorMessage style={{ textAlign: 'center', marginTop: 12 }}>{error}</ErrorMessage>) : null}
                    <div className="ButtonsWrapper">
                        <Link href="/auth/register" className='RegisterLink'>Create account?</Link>
                        <Button type='submit' disabled={isSubmitting || !isValid}>Log in</Button>
                    </div>
                </form>
            </Box>
        </LoginPageWrapper>
    )
}

export default Login
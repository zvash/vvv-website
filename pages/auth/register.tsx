import { NextPage } from 'next'
import React, { useState } from 'react'
import { Box, RegisterPageWrapper } from '../../styles/pages/auth/register'
import { useFormik } from 'formik'
import Input from '../../components/FormElements/Input/Input'
import PasswordInput from '../../components/FormElements/PasswordInput/PasswordInput'
import Button from '../../components/styled/Button'

import * as yup from 'yup'
import Link from 'next/link'
import axios, { AxiosError } from 'axios'
import { register } from '../../services/auth/register'
import ErrorMessage from '../../components/styled/ErrorMessage'
import { RegisterErrorResponse } from '../../services/auth/auth'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

const validationSchema = yup.object().shape({
    name: yup.string().required('This field is required'),
    phone: yup.string().required('This field is required'),
    password: yup.string().required('This field is required'),
    password_confirmation: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('This field is required'),
    referrer_phone: yup.string().required('This field is required'),
})



const Login: NextPage = () => {

    const [error, setError] = useState('')
    const router = useRouter()

    const { handleSubmit, values, errors, touched, setFieldValue, setFieldTouched } = useFormik({
        initialValues: {
            name: '',
            phone: '',
            password: '',
            password_confirmation: '',
            referrer_phone: '',
        },
        onSubmit: async (values, actions) => {
            setError('')
            await register(values).then(async res => {
                const result = await signIn('credentials', {
                    redirect: false,
                    username: values.phone,
                    password: values.password,
                })
    
                if (result?.error) {
                    setError('Invalid username or password');
                }
                else {
                    router.push('/');
                    return;
                }

            }).catch((error: AxiosError) => {
                if (error.response?.status == 422) {
                    setError((error.response?.data as RegisterErrorResponse).message)
                }

            }).finally(() => {
                actions.setSubmitting(false)
            });

        },
        validationSchema
    })
    return (
        <RegisterPageWrapper>
            <Box>
                <form onSubmit={handleSubmit}>
                    <Input
                        label='Name'
                        changed={(value) => setFieldValue('name', value)}
                        blurred={() => setFieldTouched('name')}
                        error={touched.name && errors.name}
                        value={values.name}
                    />
                    <Input
                        label='Identifier'
                        changed={(value) => setFieldValue('phone', value)}
                        blurred={() => setFieldTouched('phone')}
                        error={touched.phone && errors.phone}
                        value={values.phone}
                        numberOnly
                    />
                    <PasswordInput
                        label='Password'
                        changed={(value) => setFieldValue('password', value)}
                        blurred={() => setFieldTouched('password')}
                        error={touched.password && errors.password}
                        value={values.password}
                    />
                    <PasswordInput
                        label='Confirm password'
                        changed={(value) => setFieldValue('password_confirmation', value)}
                        blurred={() => setFieldTouched('password_confirmation')}
                        error={touched.password_confirmation && errors.password_confirmation}
                        value={values.password_confirmation}
                    />
                    <Input
                        label='Referrer Identifier'
                        changed={(value) => setFieldValue('referrer_phone', value)}
                        blurred={() => setFieldTouched('referrer_phone')}
                        error={touched.referrer_phone && errors.referrer_phone}
                        value={values.referrer_phone}
                        numberOnly
                    />
                    {error ? (<ErrorMessage style={{ textAlign: 'center', marginTop: 12 }}>{error}</ErrorMessage>) : null}
                    <div className="ButtonsWrapper">
                        <Link href="/auth/login" className='RegisterLink'>Already registered?</Link>
                        <Button type='submit'>Register</Button>
                    </div>
                </form>
            </Box>
        </RegisterPageWrapper>
    )
}

export default Login
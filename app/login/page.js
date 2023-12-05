'use client'
import { Formik, Field } from 'formik'
import React from 'react'
import * as yup from "yup"
import '../eStyle.css'
import { useMutation } from '../hooks/useMutation'
import { loginFn } from '../utils/requests'
import { useTimeout } from '../hooks/useTimeout'
import { useRouter } from 'next/navigation'
import { useUser } from '../contexts/UserContext'
import FormField from '../components/FormFields'
// const fieldClassname = ''

const schema = yup
    .object()
    .shape({
        email: yup.string().email().required(),
        password: yup.string().required(),
    })

const fieldsArr = [
    {
        label: 'email',
        field: 'email',
        placeholder: "Enter your email...",
        type: "text"
    },
    {
        label: 'password',
        field: 'password',
        placeholder: "Enter your Password...",
        type: "password"
    }
]

const page = () => {
    const router = useRouter()
    const emailId = React.useId()
    const passwordId = React.useId()
    const ids = [emailId, passwordId]
    const { setUserToken } = useUser()

    const loginMutation = useMutation(loginFn)


    const redirect = (to) => {
        console.log(to);
        // router.push(to)
    }

    const [, reset] = useTimeout(redirect, 1000, false)

    return (
        <>
            <Formik
                initialValues={{
                    email: "",
                    password: ''
                }}
                initialStatus={{
                    show: false,
                    state: 'normal',
                    message: null
                }}
                validationSchema={schema}
                onSubmit={(values, actions) => {
                    loginMutation.mutate(values, {
                        onSuccess: (data) => {
                            setUserToken(data.token)
                            if (data.userFound.isAdmin) {
                                actions.setStatus({
                                    show: true,
                                    state: 'success',
                                    message: "Welcome back Admin, " + data.userFound.fullname
                                })
                                reset('/admin-dashboard')
                            }
                            else {
                                actions.setStatus({
                                    show: true,
                                    state: 'success',
                                    message: "Welcome back, " + data.userFound.fullname
                                })
                                reset('/e-commerce')
                            }
                        },
                        onError: (error) => {
                            actions.setStatus({
                                show: true,
                                state: 'error',
                                message: error.message
                            })
                            actions.setSubmitting(false)
                        }
                    })
                }}
            >
                {({ handleSubmit, errors, touched, isSubmitting, status }) => (
                    <div className="bg-white py-6 sm:py-8 lg:py-12">
                        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl fHeading">Login</h2>
                            <form className='w-4/5 mx-auto grid grid-cols-1 gap-8 py-6' onSubmit={handleSubmit}>
                                <h2 className='font-bold'>Login to your account</h2>
                                {status.show && <div className={`${status.state == "error" ? "bg-red-200 text-red-700" : "bg-green-200 text-green-700"} font-bold py-4 px-2`}>{status.message}</div>}
                                {fieldsArr.map((field, i) => (<FormField field={field} id={ids[i]} touched={touched[field.field]} errors={errors[field.field]} className={''} />))}
                                <button type="submit" className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base" disabled={isSubmitting}>Log in{isSubmitting && '...'}</button>
                            </form></div></div>
                )}
            </Formik>ndex
        </>
    )
}

export default page
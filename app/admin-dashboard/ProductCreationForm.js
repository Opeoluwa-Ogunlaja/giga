'use client'

import { Formik, Field, useField  } from 'formik'
import React from 'react'
import * as yup from "yup"
import '../eStyle.css'
import { useMutation } from '../hooks/useMutation'
import { createProductFn, loginFn } from '../utils/requests'
import { useTimeout } from '../hooks/useTimeout'
import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

// const fieldClassname = ''

const schema = yup
    .object()
    .shape({
        name: yup.string().required(),
        description: yup.string().required(),
        price: yup.number().required(),
        files: yup.string().required()
    })

const fieldsArr = [
    {
        label: 'Name',
        field: 'name',
        placeholder: "Enter the product name...",
        type: "text",
    },
    {
        label: 'Description...',
        field: 'description',
        placeholder: "Enter the Description...",
        as: "textarea"
    },
    {
        label: 'Price...',
        field: 'price',
        placeholder: "Enter the Price...",
    },
]

const imageInputField = {
    field: 'files',
}

const ImagesInput = ({ handleImageChange, field }) => {
    const [, meta, helpers] = useField(field.field);
    const { setValue, setTouched, setError } = helpers;
    const { value } = meta;

    const processImageUpload = function(e){
        if(e.target.files){
            setTouched(true)
            setError(undefined)
            setValue(e.target.files)
        }
    }

    return  <div className="upload-btn-wrapper">
        <button className="w-max bg-[purple] text-white p-4 rounded-lg" type='button'>Upload an image</button>
        <input type="file" name="myfile" onChange={processImageUpload} multiple/>
    </div>
}

const ProductCreationForm = () => {
    const nameId = React.useId()
    const priceId = React.useId()
    const ids = [nameId, priceId]

    const createProductMutation = useMutation(createProductFn)

    return (
        <>
            <div>
                <h1 className='fHeading !text-2xl'>Add product</h1>
            </div>
            <Formik
                initialValues={{
                    name: "Big bagi shirt",
                    description: 'Very nice Shirt for the tropics',
                    price: 10000,
                    brand: "Generic",
                    category: "Generic",
                    totalQty: 10000,
                    colors: ["white"],
                    sizes: ["S"] 
                }}
                initialStatus={{
                    show: false,
                    state: 'normal',
                    message: null
                }} 
                validationSchema={schema}
                onSubmit={(values, actions) => {
                    createProductMutation.mutate(values, {
                        onSuccess: (data) => {
                            actions.setStatus({
                                show: true,
                                state: 'success',
                                message: data.message
                            })
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
                {({ handleSubmit, errors, touched, isSubmitting, status }) => {return (
                    <form className='w-4/5 mx-auto grid grid-cols-1 gap-8 py-6' onSubmit={handleSubmit}>
                        <h2 className='font-bold'>Create a new Product</h2>
                        {status.show && <div className={`${status.state == "error" ? "bg-red-200 text-red-700" : "bg-green-200 text-green-700"} font-bold py-4 px-2`}>{status.message}</div>}
                        {fieldsArr.map((field, i) => (<div className='form-control' key={field.field}>
                            <label htmlFor={ids[i]} className='font-medium text-neutral-500'>{field.label}</label>
                            <Field as={field.as ?? "input"} name={field.field} id={ids[i]} placeholder={field.placeholder} type={field.type} className={twMerge('p-2 font-medium border border-slate-400 rounded-md', field.customClassnames)} />
                            {(touched[field.field] && errors[field.field]) && <span className='text-red-500 text-sm'>{errors[field.field]}</span>}
                        </div>))}
                       <ImagesInput field={imageInputField}/>
                        <button type="submit" className='cta w-full !mx-0' disabled={isSubmitting}>Create product {isSubmitting && '...'}</button>
                    </form>)}
                }
            </Formik>
        </>
    )
}

export default ProductCreationForm
'use client'
import { Field } from 'formik'
import { twMerge } from 'tailwind-merge'

const FormField = ({ field, className, id, touched, errors }) => {
    return <div className='form-control' key={field.field}>
        <label htmlFor={id} className="mb-2 inline-block text-sm text-gray-800 sm:text-base capi">{field.label}</label>
        <Field as={field.as ?? "input"} name={field.field} id={id} placeholder={field.placeholder} type={field.type} className={twMerge('p-2 font-medium border border-slate-400 rounded-md', className)} />
        {(touched && errors) && <span className='text-red-500 text-sm'>{errors}</span>}
    </div>
}

export default FormField
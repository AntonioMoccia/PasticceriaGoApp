import React from 'react'


const InputField = ({ type, register, labelFor, label }) => {
    return (
        <div className=' flex flex-col'>
            <label htmlFor={labelFor}>
                {label}
            </label>
            <input className=' rounded-md px-2 py-2 border border-black' id={labelFor} type={type} {...register} />
        </div>
    )
}

export default InputField
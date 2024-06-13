import React from 'react'
import InputField from './InputField'
import { addDolce } from '../utils/api'
import { useDolci } from '../hooks/DolciHooks'
import { useForm } from 'react-hook-form'
function AddDolceForm() {

    const { dolci, setDolci } = useDolci()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({})

    const onAddForm = (e) => {

        let temp = e

        temp.ingredienti = e.ingredienti.split(',')
        if (e.data == '') {
            temp.data = new Date().toISOString()
        } else {
            temp.data = new Date(e.data).toISOString()
        }
        addDolce(temp).then(res => {
            if (res.status == 200) {

                setDolci(initial => {
                    return [
                        ...initial,
                        res.data
                    ]
                })
            }
        })

    }

    return (
        <div className=' h-full w-full flex flex-col justify-center items-center'>

            <form className='flex flex-col gap-3' onSubmit={handleSubmit(onAddForm)}>
                <InputField
                    type={'text'}
                    register={register('nome')}
                    labelFor={'nome'}
                    label={'Nome'}
                />
                <InputField type='text' register={register('prezzo')} labelFor={'prezzo'} label={'Prezzo'} />
                <InputField type='number' register={register('quantita')} labelFor={'quantita'} label={'Quantita'} />
                <InputField type='date' register={register('data')} labelFor={'data'} label={'Data'} />
                <div className='flex flex-col'>
                    <label htmlFor='ingredienti'>
                        Ingredienti
                    </label>
                    <textarea id='igredienti' {...register('ingredienti')} />
                </div>
                <button type='submit'>Aggiungi</button>
            </form>
        </div>
    )
}

export default AddDolceForm
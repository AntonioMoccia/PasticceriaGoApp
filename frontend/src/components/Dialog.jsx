import React from 'react'
import { useDolci } from '../hooks/DolciHooks'

function Dialog({ content }) {

    const { setDialogOpen, dialogOpen } = useDolci()

    return (
        <div onClick={() => {
            setDialogOpen(false)
        }} className={dialogOpen ? ' bg-[rgba(255,255,255,0.3)] h-screen w-screen fixed top-0 left-0 ' : 'hidden'}>
            <div onClick={(e) => {
                e.stopPropagation();
            }} className=' bg-slate-300 h-[80%] absolute w-[60%] z-50 top-[10%] left-[20%]'>
                {content}
            </div>
        </div>
    )
}

export default Dialog
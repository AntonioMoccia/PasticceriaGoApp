import {createContext, useState} from 'react'


export const DolciContext = createContext()


export const DolciProvider = ({children})=>{

  const [dolci,setDolci] = useState([])
const [dialogOpen, setDialogOpen] = useState(false)

    return (
        <DolciContext.Provider value={{
            dolci,
            dialogOpen,
            setDolci,
            setDialogOpen
        }}>
            {children}
        </DolciContext.Provider>
    )
}

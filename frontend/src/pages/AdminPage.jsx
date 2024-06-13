import { useEffect, useState } from 'react'
import CardDolce from "../components/CardDolce"
import { 
  useDolci
} from '../hooks/DolciHooks'
import { addDolce, getDolci } from '../utils/api'
import { useForm } from 'react-hook-form'
import Dialog from '../components/Dialog'
import AddDolceForm from '../components/AddDolceForm'
function AdminPage() {


  const {dolci,setDolci,setDialogOpen} = useDolci()





  useEffect(() => {
    getDolci().then(res => {
      setDolci(res.data);
    })
  }, [])



  /**
   * 
   * aggiungere popup di modifica del singolo dolce
   * aggiungere popup di creazione
   * 
   */



  return (
    <main className=' w-full min-h-screen'>
      <Dialog 
      content={<AddDolceForm />}
      />
     
      <div className=' bg-red-50 min-h-screen h-full w-full pt-10 '>
      <div onClick={()=>setDialogOpen(true)} className=' cursor-pointer fixed right-0 bg-slate-300 border border-slate-500 w-36 px-3 py-2 rounded-md'>
        Aggiungi dolce
      </div>
        {
          dolci.length == 0 ? (
            <h1>Non ci sonno dolci inseriti</h1>
          ) : (
            <div className=' flex justify-center w-screen '>
              <div className=' gap-4 grid grid-cols-4 w-[80%] '>
                {
                  dolci.map(dolce => {
                    return (
                      <CardDolce isAdmin key={dolce.id} dolce={dolce} />
                    )
                  })
                }
              </div>
            </div>
          )
        }
      </div>
    </main>
  )
}

export default AdminPage
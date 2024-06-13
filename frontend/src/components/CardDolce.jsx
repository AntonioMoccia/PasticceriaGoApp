import { useEffect } from "react"
import image from '../assets/esempio.jpg'
import moment from "moment";
import { deleteDolce } from "../utils/api";
import { useDolci } from "../hooks/DolciHooks";
function CardDolce({ dolce,isAdmin }) {
    const {setDolci} = useDolci()
    useEffect(() => {
        console.log(dolce);
    }, [dolce])
    return (

        
        <div className=" rounded-md p-5 border max-w-[80%] flex justify-center flex-col bg-green-50 border-black">
            {isAdmin && (<div onClick={()=>{
                deleteDolce(dolce.id)
                setDolci(initial=>{
                    return initial.filter(dol=>{
                        return dol.id !== dolce.id
                    })
                })
            }} className=" cursor-pointer bg-slate-300 px-2 py2 rounded-md border border-slate-500">Delete</div>)}
            <h1 className="  text-2xl font-medium py-3">{dolce.nome}</h1>
            <img src={image} className=" object-cover w-72 h-60 " />
            <div className=" py-4">
                <h6>Ingredienti:</h6>
                <ul className=" pl-5">
                    {
                        dolce.ingredienti.map(ingrediente => {
                            return (
                                <li className=" list-disc first-letter:uppercase">{ingrediente}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className=" w-full flex justify-between p-2 items-start">
                <div className="">{dolce.prezzo} €</div>
                <div>
                    <div>Disponibile: {dolce.quantita}</div>
                    <div className="">Del: {moment(dolce.data).format('DD/MM/YYYY')}</div>
                </div>
            </div>
        </div>
    )
}

export default CardDolce
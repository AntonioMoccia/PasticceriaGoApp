import { useEffect, useState } from 'react'
import CardDolce from '../components/CardDolce'
import { getDolci } from '../utils/api'
function Catalog() {

    const [dolci, setDolci] = useState([])
    useEffect(() => {
     getDolci().then(res => {
            setDolci(res.data);
        })
    }, [])


    return (
        <main className=' w-full min-h-screen'>
            <div className=' bg-red-50 min-h-screen h-full w-full pt-10 '>
                {
                    dolci.length == 0 ? (
                        <h1>Non ci sonno dolci inseriti</h1>
                    ) : (
                        <div className=' flex justify-center w-full '>
                            <div className=' gap-4 grid grid-cols-4 w-[80%] '>
                                {
                                    dolci.map(dolce => {
                                        return (
                                            <CardDolce key={dolce.id} dolce={dolce} />
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

export default Catalog
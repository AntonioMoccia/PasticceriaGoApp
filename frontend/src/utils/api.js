import axios from 'axios'


export const getDolci = () => {
    return axios.get('/api/Dolci')
}
export const addDolce = (dolce)=>{  
    return axios.post('/api/Dolci',dolce)
}
export const deleteDolce = (id)=>{
    return axios.delete('/api/Dolci/'+id)
}
import {useContext} from 'react'
import {DolciContext} from '../contexts/DolciContext'
export const useDolci = ()=>{
  
    return  useContext(DolciContext)     
 }
 
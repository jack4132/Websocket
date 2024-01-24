import { IData } from "../Model/model"
import { createContext, useContext } from 'react'
type GlobalContent = {
  data:IData[]|undefined,
  setData:(c:any)=>void,
  limit:number,
  setLimit:(val:number)=>void;
  setCurrent:(val:string)=>void;
}
export const MyGlobalContext = createContext<GlobalContent>({data:[{
    userId: '',
    username: '',
    avatar: '',
    email: '',
    score: 0,
  }],setData:()=>{return},limit:0,setLimit:()=>{return},setCurrent:()=>{return}})
 export const useGlobalContext = () => useContext(MyGlobalContext)
import React,{useEffect,useState} from 'react';
import './App.css';
import Layout from './Components/Layout';
import useConnect from './Hooks/useConnect';
import { MyGlobalContext } from './Utilities/context';
import { IData } from './Model/model'; 

function App() {
  const [data,setData]=useState<IData[]|undefined>([])
  const [limit,setLimit]=useState(10)
  const [current,setCurrent]=useState('')
  const handleSort=(res:IData|undefined,data:IData[]|undefined)=>{
    if(data?.length===limit && res && res?.score>data[9]?.score){
      const reorder=data.splice(9,1,res)
      const sorted= data?.sort((a,b)=>b?.score-a?.score)
      setData(sorted?.length ? sorted.slice(0,limit):[])
    }else{
      const added=res && data?.length ? [...data,res]:res ? [res]:[]
      const sorted=added?.length>1 ? added?.sort((a,b)=>b?.score-a?.score):added
      // console.log(res,data)
      setData(sorted?.length ? sorted.slice(0,limit):[])
    }
  }
  const handleLimit=(arg:IData[])=>{
    setData(arg.slice(0,limit))
  }
  
  let res:IData|undefined=useConnect("ws://localhost:3050")
  useEffect(()=>{
    handleSort(res,data)
    // console.log(res)
  },[res])

  useEffect(()=>{
    data?.length && handleLimit(data)
  },[limit])
 
  useEffect(()=>{
    // console.log(current)
        current && handleDelete()
    },[current]) 

  const handleDelete=()=>{
      //  console.log(data?.filter((d:IData)=>d.userId!=(current)),'click')
       setData(data?.filter((d:IData)=>d.userId!=current))
       setCurrent('')
    }
  

    return (
      <MyGlobalContext.Provider value={{data,setData,limit,setLimit,setCurrent}}>
          <Layout />
      </MyGlobalContext.Provider>
    );
}

export default App;

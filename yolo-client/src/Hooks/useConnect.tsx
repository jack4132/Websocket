import React, { useEffect, useState } from 'react';
import { io } from "socket.io-client";
import { IData } from '../Model/model';



const useConnect = (api:string) => {
    const socket = io(api);
    const [data,setData]=useState<IData>()
    useEffect(()=>{     
        socket.on("userData",(val:IData)=>{
            setData(val)
        })
        return () => {
                socket.disconnect();
            }
    },[socket])
    return data
};

export default useConnect;
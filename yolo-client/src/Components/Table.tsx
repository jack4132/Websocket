import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { useGlobalContext } from '../Utilities/context';
import { IData } from '../Model/model';


const CustomTable:React.FC<{}> = () => {
    const {data,setData,setCurrent}=useGlobalContext()
    
    const click=(e:any)=>{
        if(e.target.localName==='path'){
        // console.log(e.target.parentNode.classList[2],data?.filter((d:IData)=>d.userId!=e.target.parentNode.classList[2])
        // )
        setCurrent(e.target.parentNode.classList[2])
        }
    }
    
    
    
    return (
        <Box>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell ></TableCell>
            <TableCell>Username</TableCell>
            <TableCell >Email</TableCell>
            <TableCell >Score</TableCell>
            <TableCell ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody onClick={click}>
          {data?.length ? data.map((row) => (
            <TableRow
              key={row.userId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              id={row.userId.toString()}
            >
                <TableCell component="th" scope="row">
                <img src={row.avatar} width={50} height={50} onError={(e: any) => (e.target.src = "https://www.w3schools.com/howto/img_avatar.png")}/>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              
              <TableCell >{row.email}</TableCell>
              <TableCell >{row.score}</TableCell>
              <TableCell className={row.userId.toString()} key={row.userId.toString()} id={row.userId.toString()}><DeleteIcon style={{cursor:'pointer'}} className={row.userId.toString()}/></TableCell>
            </TableRow>
          )):''}
        </TableBody>
      </Table>
    </TableContainer>
        </Box>
    );
};

export default CustomTable;
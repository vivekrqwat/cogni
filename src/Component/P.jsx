import { Box, Paper, Switch, Typography } from '@mui/material'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeIcon from '@mui/icons-material/Mode';
import IosShareIcon from '@mui/icons-material/IosShare';
import React, { useEffect, useState } from 'react'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContentPasteOffSharp } from '@mui/icons-material';



function P({key1,color,c1,c,c2,d,ch}) {
    // console.log(c,c1)
    console.log("c1:",key1)
    const[check,setcheck]=useState(false)
  
    const handelcheck=()=>{
      setcheck(!check);
    
    }
 
  return (
  <Paper sx={{
    height:{sm:"109px",xs:"40%"},display:"flex",
    margin:"10px",
    borderRadius:"15px",
    width:{sm:"1185px",xs:"480px"}

  }} >
    <Box width=
    {{sm:"310px",xs:"30%"}} 
    // border={"2px solid red"} 
    display={"flex"} bgcolor={"#bbd0ff"}
    borderRadius={"10px 5px 0px"}
  
    height={{sm:"109px",xs:"90%"}}
    sx={{background:"#f8f9fa"}}>

        <Box width={{sm:"75px",xs:"30%"}}  borderRadius={"0px 0px 5px ;"}  height={"30px"} display={"flex"}
        color={"black"}
        bgcolor={check?"#b8c0ff":"#e9ecef"}
        justifyContent={"center"} alignItems={"center"} fontWeight={"600"} letterSpacing={"-0.3px"}>
          {check?"open":"close"}</Box>
        <Box width={"80%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} >
            <Typography variant='h6' fontFamily={"Work Sans"} fontWeight={"500"} fontSize={"24px"} letterSpacing={"-0.2px"}
           >Challenge {c1}</Typography>
            <Typography fontFamily={"inter"}>Total Question: {c1}</Typography>
            

        </Box>

    </Box>
    <Box  width={{sm:"60%",xs:"40%"}} display={"flex"} justifyContent={"center"} alignItems={"center"} 
    // border={"2px solid red"}
    >
        <Typography sx={{width:{sm:"73%",xs:"60%"}}}>
            {ch}
        </Typography>
    </Box>
    <Box width={{sm:"30%",xs:"25%"}} display={"flex"} justifyContent={"space-evenly"} alignItems={"center"}
    // border={"2px solid red"}
    >
        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
        <Switch checked={check} onClick={handelcheck}></Switch>
       <Typography
       sx={{color:"black"}}>
        {check?"open":"close"}</Typography> 
        </Box>
  
    <Paper
    sx={{
  display:"flex" ,justifyContent:"center", alignItems:"center",height:"40px" ,width:"40px", borderRadius:"5px"
    }} onClick={()=>{d(c1)}}>
    <svg  style={{height:"16px",width:"14,4"}}
    xmlns="http://www.w3.org/2000/svg" id="delete" x="0" y="0" version="1.1" viewBox="0 0 29 29" xml:space="preserve"><path d="M19.795 27H9.205a2.99 2.99 0 0 1-2.985-2.702L4.505 7.099A.998.998 0 0 1 5.5 6h18a1 1 0 0 1 .995 1.099L22.78 24.297A2.991 2.991 0 0 1 19.795 27zM6.604 8 8.21 24.099a.998.998 0 0 0 .995.901h10.59a.998.998 0 0 0 .995-.901L22.396 8H6.604z"></path><path d="M26 8H3a1 1 0 1 1 0-2h23a1 1 0 1 1 0 2zM14.5 23a1 1 0 0 1-1-1V11a1 1 0 1 1 2 0v11a1 1 0 0 1-1 1zM10.999 23a1 1 0 0 1-.995-.91l-1-11a1 1 0 0 1 .905-1.086 1.003 1.003 0 0 1 1.087.906l1 11a1 1 0 0 1-.997 1.09zM18.001 23a1 1 0 0 1-.997-1.09l1-11c.051-.55.531-.946 1.087-.906a1 1 0 0 1 .905 1.086l-1 11a1 1 0 0 1-.995.91z"></path><path d="M19 8h-9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zm-8-2h7V4h-7v2z"></path></svg>
    </Paper>
    <Paper
    sx={{
  display:"flex" ,justifyContent:"center", alignItems:"center",height:"40px" ,width:"40px", borderRadius:"5px"
    }}><CreateOutlinedIcon ></CreateOutlinedIcon></Paper>
     <Paper
    sx={{
  display:"flex" ,justifyContent:"center", alignItems:"center",height:"40px" ,width:"40px", borderRadius:"5px"
    }}>

<img  style={{width:"14px",height:"14px"}}
src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa2XZUEV8ycXqcRXtn3358UWmTL7ToHmPTzA&s'></img>
</Paper>
    
  
    </Box>
    
  </Paper>
  )
}

export default P

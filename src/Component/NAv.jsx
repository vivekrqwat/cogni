import React from 'react'
import {AppBar, Avatar, Box, Toolbar, Typography} from "@mui/material"
import Drawer1 from './Drawer1'
import { Height } from '@mui/icons-material'
function NAv() {
  return (
    <Box  width={{sm:"100%",xs:"570px"}} height={"91px"} >
<AppBar sx={{position:"sticky",background:"#4C6EF5",width:"100%"}}>
    <Toolbar sx={{
        display:"flex",
        justifyContent:"space-between"
    }}>
    <Typography fontFamily={"Work Sans"} fontWeight={"900"} fontSize={"26px"} lineHeight={"20px"}>Loremlpsum</Typography>
    <Box display={{sm:"flex",xs:"none"} } gap={"20px"} width={"40%"}  justifyContent={"end"}
   
    // border={"2px solid red"}
    >
        
        <Box display={"flex"} width={{sm:"227px"}} justifyContent={"space-around"}
        alignItems={"center"} borderRadius={"20px"} 
        // border={"2px solid red"}
       

     >
            <Typography fontFamily={"Work Sans"}>Home</Typography>
            <Typography fontFamily={"Work Sans"} sx={{opacity:"0.5"}}>Option1</Typography>
            <Typography fontFamily={"Work Sans"}  sx={{opacity:"0.5"}} >Option2</Typography>
          
        </Box>
        <Box display={"flex"} gap={"10px"} justifyContent={"center"} alignItems={"center"}>
        <Typography>Utkarsh</Typography>
        <Avatar src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" sx={{border:"2.5px solid white"}}></Avatar>
        </Box>
     
    </Box>
    <Box display={{sm:"none",xs:"flex"}}><Drawer1></Drawer1></Box>
    
    </Toolbar>
</AppBar>
    </Box>
  )
}

export default NAv

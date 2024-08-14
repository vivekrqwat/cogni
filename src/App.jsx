import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import NAv from './Component/NAv'
import { Box, Button, Input, Modal, Paper, TextField, Typography } from '@mui/material'
import P from './Component/P'
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import db from './Component/db'
import"./app.css"
import { OpenInNew } from '@mui/icons-material'

function App() {
  const [count, setCount] = useState(0)
  const [list,setlist]=useState(db)
  let c=0;
  const delete1=(key)=>{
    let newlist=[...list];
  let newk=newlist.filter((i)=>i.c1!==key)
  console.log(newk)
  
  setlist([...newk])
    console.log(key)

  }
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [d,setd]=useState({})
  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(d)
    setlist([...list,d])
    setOpen(false)

  }
  console.log(open)
  return (
    <div className='app'>
     <NAv></NAv>
     <Box display={"flex"} flexDirection={"column"} 
     alignItems={"center"}

    //  border={"2px solid green"} 
     height={"100vh"}
     width={{xs:"570px",sm:"100%"}}>
      <Box mt={"5px"} display={"flex"} justifyContent={{sm:"space-between",xs:"space-evenly"}}
      // border={"2px solid red"} 
      borderRadius={"10px"}
      
      width={{sm:"1185px"}} height={"75px"}
   className="b"
      >
        <Box 
        //  border={"1px solid red"} 
    
        height={"80px"}
        width={{sm:"30%",xs:"40%"}} justifyContent={"center"} alignItems={"center"} display={"flex"} flexDirection={"column"}>
         <Box>
         <Typography fontFamily={"Work Sans"} fontWeight={"500"} fontSize={"22px"} letterSpacing={"-0.2px"}>HELLO! <span style={{fontSize:"25px"}}>&#128075;</span> </Typography>
        
         lorem ipsum dolar sit amet
         </Box>
         
        </Box>
        <Box display={"flex"} width={{sm:"45%",xs:"60%"}} 
        // border="2px solid yellow "
        justifyContent={"center"} alignItems={"center"}  gap={{sm:"20px",xs:"15px"}}>
        
        <Box border={"0.5px solid black "} height={"40%"} display={"flex"} width={"240px"}
        borderRadius={"10px"} justifyContent={"center"}alignItems={"center"}>
          <SearchIcon></SearchIcon>
          <input type='text' 
          style={{border:"none",outline:"none",width:"240px", padding:"5px",borderRadius:"10px"}} 
          placeholder='Search by title'></input>
        </Box>
        <Modal open={open}
        onClose={()=>{setOpen(!open)}}
      
        sx={{border:"2px solid red",
          display:"flex",justifyContent:"center",alignItems:"center",
        }}>
          
         
            <form onSubmit={handlesubmit} style={{
              background:"white",
              borderRadius:"10px",
            
              width:"340px",
              height:"340px",border:"2px solid green",
              display:"flex" ,justifyContent:"space-around",flexDirection:"column"}}>
                <Typography>ADd Challenge</Typography>
      
            <TextField placeholder='enter text' 
            variant='outlined'
            onChange={(e)=>{setd({
               c:"closed",
               cg:"#646669",
               ch:e.target.value,
               c2:"#e9ecef"
              
              })}}></TextField>
            <Button type='submit' variant='contained'>submit</Button>
           
        
          </form>
         
        </Modal>
        <Button  startIcon={<AddIcon></AddIcon>} variant='outlined' onClick={handleOpen}> Add Challenge</Button>
    {/* <div style={{display:"flex",width:"240px"}}>
      <AddIcon></AddIcon>
      <button style={{border:"none",background:"white"}}> add Challenge</button>
    </div> */}
        
        </Box>
      
      </Box>
      <br></br>
      {
        list.map((i,index)=>{
          return   <P key={index}
          color={i.cg} c1={i.c1} c={i.c} c2={i.c2} d={delete1} ch={i.ch} key1={index+1}></P>
        })
      }
    
      
     </Box>
     </div>
  )
}

export default App

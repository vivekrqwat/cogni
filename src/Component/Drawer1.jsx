import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import NotesIcon from '@mui/icons-material/Notes';

export default function Drawer1() {
  const [open, setOpen] = React.useState(false);

  const Drawer2 = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box>
      <List>
        {['HOME', 'GameMsster', 'Participant', 'Judge'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
             
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    
    </Box>
  );

  return (
    <div>
      <Button onClick={Drawer2(true)} color='success' startIcon={<NotesIcon></NotesIcon>}></Button>
      <Drawer open={open} onClose={Drawer2(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
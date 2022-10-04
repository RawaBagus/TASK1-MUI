import './App.css';
import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

function createData(fruitName) {
  return { fruitName};
}

const rows = [
  createData('orange1'),
  createData('apple2'),
];

function App() {
    const [list,setFruit] = useState(['orange1','apple2'])
    const handleFunction = (value)=>{
        setFruit([...list,value])
    }
    return (
      <div>
        <h1 align="center">Simple List in React</h1>
        <h2 align="center">Adding  a dynamically generated list item</h2>
        <Box sx={{ maxWidth: 360, bgcolor: '#e6f9ff', 'margin-left': 'auto',
            'margin-right':'auto',
            'margin-bottom':'20px',
            'border-color':'white',
            width: '50%',
            boxShadow: 'rgb(0,0,0,0.44) 0px 1px 5px',
            padding: '10px'}}>
            {list.map((item,index)=>
                <List align='center' maxWidth='360' width='50%' >
                  <ListItem >
                    <ListItemButton sx={{'height':'40px',padding:'20px','border-color':'white' }}>
                      <ListItemText key={index} sx={{'text-align':'center',color:'#003399'}}>
                        {item}
                        </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <Divider/>
                  </List>
                )}
        </Box>
        <Box component="form" sx={{
            '& > :not(style)': { m: 0.1, width: '21ch', height: '7ch' },
        }}
        noValidate autoComplete="off"> 
        Fruit Name
        <TextField id="outlined-basic" label="e.x.lemmon" variant="outlined" />
        <Button onClick={()=>{
            var input = document.getElementById('outlined-basic').value;
            handleFunction(input)}} variant="contained">Add Fruit</Button>
        </Box>
      </div>
    );
  }
export default App;
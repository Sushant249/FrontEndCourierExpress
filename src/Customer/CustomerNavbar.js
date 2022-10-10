import {AppBar,Box,Toolbar,Typography,Button} from '@mui/material';
import { NavLink } from 'react-router-dom';
const CustomerNavbar = () => {
  return <>
  
  <Box sx={{flexGrow:1}}>
    <AppBar position="static" color="secondary">
      <Toolbar>
       <Typography varient='h5' component="div" sx={{flexGrow: 1}}>
        Courier-Express
       </Typography>
       <Button component={NavLink} to='/'style={({isActive})=>{return{backgroungColor: isActive ? '#6d1b7b':''}}}
          sx={{color:'white', textTransform:'none'}}>Home</Button>
       <Button component={NavLink} to='/Contact'style={({isActive})=>{return{backgroungColor:isActive ? '#6d1b7b':''}}}
          sx={{color:'white', textTransform:'none'}}>Contact</Button>

       <Button component={NavLink} to='/Admin'style={({isActive})=>{return{backgroungColor: isActive ? '#6d1b7b':''}}}
          sx={{color:'white', textTransform:'none'}}>Admin</Button>

       <Button component={NavLink} to='/Login'style={({isActive})=>{return{backgroungColor:isActive ? '#6d1b7b':''}}}
          sx={{color:'white', textTransform:'none'}}>Customer</Button>

        {/* <Button component={NavLink} to='/Login'style={({isActive})=>{return{backgroungColor:isActive ? '#6d1b7b':''}}}
          sx={{color:'white', textTransform:'none'}}>Login/Registration</Button>
        */}
      </Toolbar>

    </AppBar>
  </Box>
  
  </>;
    
  
};

export default CustomerNavbar;
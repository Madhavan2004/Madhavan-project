import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Link} from "react-router-dom"

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="error" sx={{color:'pink'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/home">Home</Link><br/>
          <Link to="/aboutus">AboutUs</Link><br/>
          <Link to="/contactus">ContactUs</Link><br/>
          </Typography>
          <IconButton color="primary" aria-label=" add to shopping cart ">
  <AddShoppingCartIcon />
  <Link to="/login"> Login</Link>
</IconButton>
          <Button color="inherit"></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

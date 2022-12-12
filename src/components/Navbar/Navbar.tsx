import React from 'react'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import SearchIcon from '@mui/icons-material/Search';



import {Search, SearchIconWrapper, StyledInputBase} from './styles'




function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
       <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           TripAdviser
          </Typography>


          <Box display='flex' >
          <Typography  variant="h6"  noWrap   component="div"  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
           search
          </Typography>
          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Box>
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './Header.css'

export default function BasicTabs() {

  return (
    <Box className='box'sx={{ width: '100%' }}>
      <Box className='box' sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: 'black'}}>
        <Tabs className = 'navBar'  aria-label="basic tabs example">
          <a href='#aboutme'><Tab className='label' label="About Me" /></a>
          <a href='#techstack'><Tab className='label' label="Tech Stack" /></a>
          <a href='#portfolio'><Tab  className='label'label="My Portfolio" /></a>
          <a href='#contact'><Tab  className='label'label="Contact" /></a>
        </Tabs>
      </Box>
    </Box>
  );
}


import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './Header.css'

export default function BasicTabs() {

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs className = 'navBar'  aria-label="basic tabs example">
          <a href='#aboutme'><Tab className = 'navBar' label="About Me" /></a>
          <a href='#techstack'><Tab className = 'navBar' label="Tech Stack" /></a>
          <a href='#portfolio'><Tab className = 'navBar' label="My Portfolio" /></a>
          <a href='#contact'><Tab className = 'navBar' label="Contact" /></a>
        </Tabs>
      </Box>
    </Box>
  );
}


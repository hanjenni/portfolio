import React from 'react';
import './About.css'
import Box from '@mui/material/Box';

export default function About() {
    return (
        <>
            <div id='aboutme'>
                <h1>Hi, I'm Jen</h1>
                <img className='myPic' src="https://i.imgur.com/uQMdJWmm.png" alt="Jennifer Han" />
                <Box className='aboutMe' sx={{width: 500, height: 300}}>
                        <p>I'm a teacher turned software engineer. I love creating functional and aesthetic applications!
                        My spark for Web Development started when I taught 6th grade at a Computer Science Magnet School.
                        Unfortunately, Covid hit and we couldn't learn as a class but I kept going and here I am now!  </p>
                </Box>

              


            </div>
            <hr class="solid"></hr>

        </>
    )
}
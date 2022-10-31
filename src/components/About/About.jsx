import React from 'react';
import './About.css'
import Box from '@mui/material/Box';

export default function About() {
    return (
        <>
            <div id='aboutme'>
                <h1>Hi, I'm Jen</h1>
                <img className='myPic' src="https://i.imgur.com/uQMdJWmm.png" alt="Jennifer Han" />
                <Box className='aboutMe' >
                        <p className='description'>I'm a teacher turned software engineer. I love creating functional and aesthetic applications!
                        My spark for Web Development started when I taught 6th grade at a Computer Science Magnet School.
                        Unfortunately, Covid hit and we couldn't learn as a class but I kept going and here I am now!</p>
                        <div>
                            <a href='https://github.com/hanjenni'><img src="https://i.imgur.com/4VTPSZQ.png" alt="github" /></a>
                            <a href='https://www.linkedin.com/in/jenniferhan12/'><img src="https://i.imgur.com/FBcnQl7.png" alt="linkedin" /></a>
                        </div>
                        
                </Box>

              


            </div>
            <hr class="solid"></hr>

        </>
    )
}
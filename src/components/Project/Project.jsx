import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import './Project.css';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
    return (
        <>
            <section id='portfolio'>
            <h1>My Projects</h1>
            <Box className='portfolio'>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Item className='portfolio'><img src="https://i.imgur.com/s5dForum.png" alt="Tama the Tamagotchi" />
                            <br></br><a className = 'button'href='https://github.com/hanjenni/tamagotchi'>Github</a> | <a className = 'button' href='https://hanjenni.github.io/tamagotchi/'>Deployment Link</a>
                            <p>For this game, we are going back to play one of the hottest games of the late 1990's early 2000's. Tama the Tamagotchi is a silly little dinosaur who wants to have his needs met. He enjoys a good snack, some naps and a few toys. Help keep Tama happy by giving him what he needs.</p>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><img src="https://i.imgur.com/JuuooU1m.png" alt="Honest Schools" />
                        <br></br><a className = 'button' href='https://github.com/hanjenni/project-2'>Github</a> | <a className = 'button' href='https://warm-escarpment-40704.herokuapp.com/'>Deployment Link</a>
                            <p>Honest Schools was created so that teachers would have a platform where they can freely discuss the working environment of different school districts so they can find a workplace that is suited to their needs.</p>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><img src="https://i.imgur.com/AbKDDzTm.png" alt="Streamur Lemur" />
                            <br></br><a className = 'button' href='https://github.com/hanjenni/streamer-lemur'>Github</a> | <a className = 'button' href='https://streamerlemur.herokuapp.com/'>Deployment Link</a>
                            <p>Streamer Lemur can help you find and keep track of what you're watching. With Streamur Lemur you can find movies and shows, save your favorites and see where you can watch it.</p>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><img src="https://i.imgur.com/PreN95Hm.png" alt="Baby Animals" />
                            <br></br><a className = 'button' href='https://github.com/hanjenni/babyanimals'>Github</a> | <a className = 'button' href='https://baby-animals.herokuapp.com/'>Deployment Link</a>
                            <p>Are you stressed? Do you love cute baby animals? If you answered yes to one or both questions, Baby Animals is the site for you. Come share and view adorable pictures of baby animals!</p>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            </section>
        </>
    );
}

// export default function Projects() {
//     return (
//         <>
//             <h1>Projects</h1>
//         <Grid className='container' container spacing={1} centered>
//             <Grid item xs={3}>
//                 <img src="https://i.imgur.com/qtsVz5Fb.png" alt="Tama the Tamagotchi" />
//             </Grid>
//             <Grid item xs={3}>
//                 <img src="https://i.imgur.com/qtsVz5Fb.png" alt="Tama the Tamagotchi" />
//             </Grid>
//             <Grid item xs={3}>
//                 <img src="https://i.imgur.com/qtsVz5Fb.png" alt="Tama the Tamagotchi" />
//             </Grid>
//             <Grid item xs={3}>
//                 <img src="https://i.imgur.com/qtsVz5Fb.png" alt="Tama the Tamagotchi" />
//             </Grid>
//         </Grid>
//         </>
//     )
// }

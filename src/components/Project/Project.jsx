import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

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
            <h1 id='portfolio' >My Portfolio</h1>
            <Box>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Item><img src="https://i.imgur.com/qtsVz5Fb.png" alt="Tama the Tamagotchi" />
                            <br></br>Github Link | Deployment Link
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><img src="https://i.imgur.com/JuuooU1b.png" alt="Honest Schools" />
                            <br></br>Github Link | Deployment Link
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><img src="https://i.imgur.com/wPXS9fxb.png" alt="Streamur Lemur" />
                            <br></br>Github Link | Deployment Link
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><img src="https://i.imgur.com/PreN95Hb.png" alt="Baby Animals" />
                            <br></br>Github Link | Deployment Link
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}


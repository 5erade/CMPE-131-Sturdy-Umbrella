import React, {Component} from 'react';
import Game from "./Game";
import {Box,  Grid} from "@material-ui/core";
import {Button, Typography} from "@mui/material";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import TextField from '@mui/material/TextField';


function refreshPage() {
    window.location.reload(false);
}

class GamePage extends Component {
    render() {
        return (
            <div   style={{
                backgroundColor: 'grey',

            }}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Box m={20}>
                            <TextField sx={{ m: 1, borderColor:'#ffffff'}} ref="p1" defaultValue={'X'} id="player1" label="Player 1 Icon" variant="outlined" >0</TextField>
                            <br/>
                            <TextField sx={{ m: 1, color:'#ffffff'}} ref="p2" defaultValue={'O'} id="player2" label="Player 2 Icon" variant="outlined" />
                            <br/>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography  align={"center"}>
                            <Typography variant={"h2"} style={{
                                color: 'white',

                            }}>
                                TIC-TAC-TOE
                            </Typography>
                            <br/>
                            <Game/>
                            <Button sx={{ m:1, borderColor:'#ffffff'}} style={{
                                color: '#ffffff',
                            }} variant={"outlined"} onClick={refreshPage

                            }>
                                Reset &nbsp;

                                <AutorenewIcon/>

                            </Button>


                        </Typography>
                        <Grid item xs={4}>

                        </Grid>
                    </Grid>


                </Grid>

            </div>
        );
    }
}

export default GamePage;
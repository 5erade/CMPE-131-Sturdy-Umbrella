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
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            <br/>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            <br/>
                            <Button variant={"contained"}>
                                Select
                            </Button>
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
                            <Button style={{
                                color: '#35ff00',
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
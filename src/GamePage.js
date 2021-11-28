import React, {Component} from 'react';
import Game from "./Game";
import {Box, Card, Grid} from "@material-ui/core";
import {Button, Link, Typography} from "@mui/material";
import AutorenewIcon from '@mui/icons-material/Autorenew';


function refreshPage() {
    window.location.reload(false);
}

class GamePage extends Component {
    render() {
        return (
            <div   style={{
                backgroundColor: 'black',

            }}>
                <Grid>
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
                    <Box m={40}>
                    </Box>
                </Grid>

            </div>
        );
    }
}

export default GamePage;
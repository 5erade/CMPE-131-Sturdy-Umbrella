import React, {Component} from 'react';
import Game from "./Game";
import { Grid} from "@material-ui/core";
import { Typography} from "@mui/material";


export class GamePage extends Component {

    render() {
        return (
            <div   style={{
                backgroundColor: '#4d4d4d',

            }}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>

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
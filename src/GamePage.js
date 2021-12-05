import React, {Component} from 'react';
import Game from "./Game3x3";
import Game2 from "./Game3x3";

import {Button, FormControlLabel, FormLabel, Grid, Radio, RadioGroup} from "@material-ui/core";
import {Link, Typography} from "@mui/material";
import Game3x3 from "./Game3x3";


export class GamePage extends Component {

    render() {
        return (
            <div   style={{
                backgroundColor: '#1c1c1c',
            }}>
                    <Grid container
                          alignItems="center"
                          justifyContent="center"
                          style={{ minHeight: '100vh' }}
                        >
                        <Typography  variant={'h2'} style={{color: 'white'}} align={"center"}>
                            <br/>
                            <Game3x3/>
                            <Link href="/" >
                                <Button
                                    variant="contained"
                                >
                                    back
                                </Button>
                            </Link>
                        </Typography>
                    </Grid>
            </div>
        );
    }
}

export default GamePage;
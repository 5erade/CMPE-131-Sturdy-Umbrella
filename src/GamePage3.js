
import React, {Component} from 'react';


import {Button, FormControlLabel, FormLabel, Grid, Radio, RadioGroup} from "@material-ui/core";
import {Link, Typography} from "@mui/material";
import Game2x2 from "./Game2x2";


export class GamePage3 extends Component {

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
                        <Game2x2/>
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

export default GamePage3;
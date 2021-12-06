import React, {Component} from 'react';
import {Button, Grid} from "@material-ui/core";
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
                        </Typography>
                        <Link href="/" >
                            <Button
                                variant="contained"
                            >
                                back
                            </Button>
                        </Link>
                    </Grid>
            </div>
        );
    }
}

export default GamePage;
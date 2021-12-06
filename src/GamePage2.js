import React, {Component} from 'react';
import {Button,Grid} from "@material-ui/core";
import {Link, Typography} from "@mui/material";
import Game5x5 from "./Game5x5";


export class GamePage2 extends Component {

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
                        <Game5x5/>
                    </Typography>
                    <Link  margin={3} href="/" >
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

export default GamePage2;
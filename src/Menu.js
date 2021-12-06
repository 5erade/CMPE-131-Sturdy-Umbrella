import React, {Component} from 'react';
import {Button,Grid} from "@material-ui/core";
import {Link, Typography} from "@mui/material";


export class Menu extends Component {

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
                        Select Game Mode
                        <br/>
                        <Link href="/2x2" >
                            <Button
                                variant="contained"
                            >
                                2x2
                            </Button>
                        </Link>
                        <br/>
                        <Link href="/3x3" >
                            <Button
                                variant="contained"
                            >
                                3x3
                            </Button>
                        </Link>

                        <br/>
                        <Link href="/5x5">
                            <Button
                                variant="contained"

                            >
                                5x5
                            </Button>
                        </Link>


                    </Typography>
                </Grid>
            </div>
        );
    }
}

export default Menu;
import * as React from 'react';
import {Button, Grid, Stack, TextField, Typography} from "@mui/material";
import styled from "@emotion/styled";
import './Game.css';
import {Chip} from "@material-ui/core";
import AutorenewIcon from "@mui/icons-material/Autorenew";

const MyButton = styled(Button)({
    border: '2px solid',
    borderRadius: 0,
    borderColor: '#ffffff',
    height: 100,
    width: 100,
    margin: -1,
    fontSize: 40,
    color: '#35ff00'

});

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'green',
    },
    '& label': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },

});


class Tile extends React.Component {
    render() {
        return (

            <div>
                <MyButton
                    className="tile"
                    onClick={() => this.props.onClick()}
                >
                    {this.props.value}
                </MyButton>
            </div>

        );
    }
}




class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameTiles: Array(9).fill(null),
            nextMove: true,
            symbolX: 'X',
            symbolO:'O'
        };

        this.changeSymbolX = this.changeSymbolX.bind(this);
        this.changeSymbolO = this.changeSymbolO.bind(this);

    }

    changeSymbolX= (event) => {
        this.setState({symbolX: event.target.value});
        const tiles = this.state.gameTiles.fill(null);

        this.setState({
            gameTiles: tiles,
            nextMove: this.state.symbolX
        })
    }

    changeSymbolO= (event) => {
        this.setState({symbolO: event.target.value});
        const tiles = this.state.gameTiles.fill(null);

        this.setState({
            gameTiles: tiles,
            nextMove: this.state.symbolX
        })
    }
    handleClickReset(){
        const tiles = this.state.gameTiles.fill(null);

        this.setState({
            gameTiles: tiles,
            nextMove: this.state.symbolX
        })
    }
    handleClick(i) {
        const tiles = this.state.gameTiles.slice();
        if (calculateWinner(tiles) || tiles[i]) {
            return;
        }
        tiles[i] = this.state.nextMove ? this.state.symbolX  : this.state.symbolO ;

        this.setState({
            gameTiles: tiles,
            nextMove: !this.state.nextMove,
        });
    }

    renderTile(i) {
        return (
            <Tile
                value={this.state.gameTiles[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        const winner = calculateWinner(this.state.gameTiles);

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else if(winner === 0){
            status = 'Cat\'s Game3x3';
        }
        else {
            status = 'Next player: ' + (this.state.nextMove ? this.state.symbolX  : this.state.symbolO );
        }

        return (
            <div>
                <Typography variant={"h2"}
                            style={{color: 'white',
                            }}>

                    &nbsp;&nbsp;&nbsp;TIC-TAC-TOE
                </Typography>
                <Stack  direction={'row'} spacing={3} marginTop={'auto'} >
                    <Stack justifyContent={"center"} spacing={3} >
                        <CssTextField
                            id="custom-css-outlined-input"
                            inputProps={{ min: 0, style: {textAlign: 'center'}}}
                            sx={{ width: 72, input: { color: 'white' }}}
                            label={'Player 1 Icon'}
                            variant="standard"
                            value={this.state.symbolX}
                            onChange={this.changeSymbolX}
                        />
                        <CssTextField
                            id="custom-css-outlined-input"
                            inputProps={{ min: 0, style: {textAlign: 'center'}}}
                            sx={{ width: 72 , input: { color: 'white' }}}
                            label={'Player 2 Icon'}
                            variant="standard"
                            value={this.state.symbolO}
                            onChange={this.changeSymbolO}
                        />
                    </Stack>
                    <Stack>

                        <Typography variant={"h4"} >
                            <Chip style={{color: 'green', backgroundColor: 'white'}} label={status} variant={'outlined'}/>
                        </Typography>

                        <br/>
                        <Stack direction={'row'}>
                            {this.renderTile(0)}{this.renderTile(1)}
                        </Stack>
                        <Stack direction={'row'}>
                            {this.renderTile(2)}{this.renderTile(3)}
                        </Stack>
                        <div>
                            <Button sx={{ m:1, borderColor:'#ffffff'}} style={{
                                color: '#ffffff',
                            }} variant={"outlined"}    onClick={() => this.handleClickReset()
                            }>
                                Reset &nbsp;
                                <AutorenewIcon/>
                            </Button>

                        </div>
                    </Stack>
                </Stack>
            </div>
        );
    }
}




class Game2x2 extends React.Component {
    render() {
        return (
            <div className="game">
                <Grid>
                    <div className="game-board">
                        <Board />
                    </div>
                </Grid>
            </div>
        );
    }
}

function calculateWinner(gameTiles) {
    const lines = [
        [0,1], [0,2],[0,3],[2,3]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b] = lines[i];
        if (gameTiles[a] && gameTiles[a] === gameTiles[b]) {
            return gameTiles[a];
        }
    }
    if (gameTiles.includes(null) === false){
        return 0;
    }
    return null;


}

export default Game2x2;





import * as React from 'react';
import {Button, Grid, Stack, TextField, Typography} from "@mui/material";
import styled from "@emotion/styled";
import './Game.css';
import {
    Chip,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup
} from "@material-ui/core";
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
            gameTiles: Array(15).fill(null),
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
            status = 'Cat\'s Game5x5';
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
                            {this.renderTile(0)}{this.renderTile(1)}{this.renderTile(2)}{this.renderTile(3)}{this.renderTile(4)}
                        </Stack>
                        <Stack direction={'row'}>
                            {this.renderTile(5)}{this.renderTile(6)}{this.renderTile(7)}{this.renderTile(8)}{this.renderTile(9)}
                        </Stack>
                        <Stack direction={'row'}>
                            {this.renderTile(10)}{this.renderTile(11)}{this.renderTile(12)}{this.renderTile(13)}{this.renderTile(14)}
                        </Stack>
                        <Stack direction={'row'}>
                            {this.renderTile(15)}{this.renderTile(16)}{this.renderTile(17)}{this.renderTile(18)}{this.renderTile(19)}
                        </Stack>
                        <Stack direction={'row'}>
                            {this.renderTile(20)}{this.renderTile(21)}{this.renderTile(22)}{this.renderTile(23)}{this.renderTile(24)}
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




class Game5x5 extends React.Component {
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
        [0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19], [20, 21, 22, 23, 24], [0, 5, 10, 15, 20],
        [1, 6, 11, 16, 21], [2, 7, 12, 17, 22], [3, 8, 13, 18, 23],
        [4, 9, 14, 19, 24], [0, 6, 12, 18, 24], [4, 8, 12, 10, 20]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c, d, e] = lines[i];
        if (gameTiles[a] && gameTiles[a] === gameTiles[b] && gameTiles[a] === gameTiles[c] && gameTiles[a] === gameTiles[d] && gameTiles[a] === gameTiles[e]) {
            return gameTiles[a];
        }
    }
    if (gameTiles.includes(null) === false){
        return 0;
    }
    return null;


}

export default Game5x5;





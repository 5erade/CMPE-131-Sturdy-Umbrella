import * as React from 'react';
import {Button, Grid, TextField, Typography} from "@mui/material";
import styled from "@emotion/styled";
import './Game.css';
import {Box} from "@material-ui/core";
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


class Tile extends React.Component {
    render() {
        return (
            <MyButton
                className="tile"
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
            </MyButton>
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
    resetBoard= (event) => {
        this.setState({gameTiles: event.target.fill(null)});
    }
    changeSymbolX= (event) => {
        this.setState({symbolX: event.target.value});
    }

    changeSymbolO= (event) => {
        this.setState({symbolO: event.target.value});
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
            status = 'Cat\'s Game';
        }
        else {
            status = 'Next player: ' + (this.state.nextMove ? this.state.symbolX  : this.state.symbolO );
        }

        return (
            <div>
                <TextField
                    sx={{borderColor:'#ffffff'}}
                    //defaultValue={'X'}
                    label="Player 1 Icon"
                    variant="outlined"
                    value={this.state.symbolX}
                    onChange={this.changeSymbolX}
                />
                <br/>
                <br/>
                <TextField
                    sx={{borderColor:'#ffffff'}}
                    //defaultValue={'O'}
                    label="Player 2 Icon"
                    variant="outlined"
                    value={this.state.symbolO}
                    onChange={this.changeSymbolO}
                />
                <Typography variant={"h4"}>
                    <div className="status">
                        {status}
                    </div>
                </Typography>
                <div className="board-row">
                    {this.renderTile(0)}{this.renderTile(1)}{this.renderTile(2)}
                </div>
                <div className="board-row">
                    {this.renderTile(3)}{this.renderTile(4)}{this.renderTile(5)}
                </div>
                <div className="board-row">
                    {this.renderTile(6)}{this.renderTile(7)}{this.renderTile(8)}
                </div>
                <div>
                    <Button sx={{ m:1, borderColor:'#ffffff'}} style={{
                        color: '#ffffff',
                    }} variant={"outlined"}    onClick={() => this.handleClickReset()
                    }>
                        Reset &nbsp;
                        <AutorenewIcon/>
                    </Button>
                </div>
                <br/>

            </div>
        );
    }
}




class Game extends React.Component {
    render() {
        return (
            <div className="game">

            <Grid>
                    <Box m={5}>

                    </Box>
            </Grid>
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
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
    ];
            for (let i = 0; i < lines.length; i++) {
                const [a, b, c] = lines[i];
                if (gameTiles[a] && gameTiles[a] === gameTiles[b] && gameTiles[a] === gameTiles[c]) {
                    return gameTiles[a];
                }
            }
            if (gameTiles.includes(null) === false){
                return 0;
            }
            return null;


}

export default Game;





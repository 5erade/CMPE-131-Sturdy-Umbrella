import * as React from 'react';
import {Button, Typography} from "@mui/material";
import styled from "@emotion/styled";
import './Game.css';
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
        };
    }

    handleClick(i) {
        const tiles = this.state.gameTiles.slice();
        if (calculateWinner(tiles) || tiles[i]) {
            return;
        }
        tiles[i] = this.state.nextMove ? 'X' : 'O';

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
        } else {
            status = 'Next player: ' + (this.state.nextMove ? 'X' : 'O');
        }

        return (
            <div>
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
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
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
    return null;
}

export default Game;





import * as React from 'react';
import Container from '@mui/material/Container';
import {Button, Typography} from "@mui/material";
import styled from "@emotion/styled";
//import * as ReactDOM from "react-dom";
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


class Square extends React.Component {
    render() {
        return (
            <MyButton
                className="square"
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
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
        return (

                <Square className="text"
                    value={this.state.squares[i]}
                    onClick={() => this.handleClick(i)}
                />



        );
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <Typography variant={"h4"}>
                    <div className="status">
                        {status}
                    </div>
                </Typography>
                <div className="board-row">
                    {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
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

export default Game;

// ========================================

//ReactDOM.render(
  //  <Game />,
   // document.getElementById('root')
//);
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}


import {BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom";
import index from "./index";
import Game from "./Game"
import GamePage from "./GamePage";
import  "./Game.css"


function App() {
    return(
        <div >
            <Router>
                <Routes>
                    <Route path="/" element={<GamePage/>}/>
                </Routes>
            </Router>
        </div>
    );



}

export default App;
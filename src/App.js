import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import GamePage from "./GamePage";
import  "./Game.css"
import Menu from "./Menu";
import GamePage2 from "./GamePage2";
import GamePage3 from "./GamePage3";

function App() {
    return(
        <div >
            <Router>
                <Routes>
                    <Route path="/" element={<Menu/>}/>
                    <Route path="/2x2" element={<GamePage3/>}/>
                    <Route path="/3x3" element={<GamePage/>}/>
                    <Route path="/5x5" element={<GamePage2/>}/>
                </Routes>
            </Router>
        </div>
    );

}

export default App;
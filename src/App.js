import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
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
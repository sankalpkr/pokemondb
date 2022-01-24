import React from "react";
import First from "./first";
import Home from "./Home";
import Fire from "./Fire";
import Water from "./Water";
import Grass from "./Grass";
import Electric from "./Electric";
import Login from "./Login";
import Register from "./Register";
import "./App.css";
import "./link.css";
import { BrowserRouter as Router,Route,Routes,Link } from "react-router-dom";


function App() {
  console.log(React.version)
  return (
    <div className="App">
      <Router basename="/pokemondb">
        <div>
          
        <nav id = "nav">
          <div id = "div1">
          <div class="headshot headshot-1"></div>
          </div>
          <br />
          <h1 id = "name">POKEMON DATABASE</h1>
          <div id = "logreg">
          <Link class = "links1" to="/Login"><span id = "a">Login</span></Link>
          <br />
          <Link class = "links1" to="/Register">Register</Link>
          </div>
          <br />
          </nav>
          <nav id = "nav1">
          <Link class = "links home" to="/">Home</Link>&nbsp;
          <Link class = "links fire" to="/Fire">Fire</Link>&nbsp;
          <Link class = "links water" to="/Water">Water</Link>&nbsp;
          <Link class = "links electric" to="/Electric">Electric</Link>&nbsp;
          <Link class = "links grass" to="/Grass">Grass</Link>  
        </nav>
        
        </div>
      <Routes>
      <Route exact path="/" element={<Home />}/>
        <Route exact path="/home" element={<First />}/>
        <Route exact path="/Fire" element={<Fire />}/>
        <Route exact path="/Water" element={<Water />}/>
        <Route exact path="/Grass" element={<Grass />}/>
        <Route exact path="/Electric" element={<Electric />}/>
        <Route exact path="/Login" element={<Login />}/>
        <Route exact path="/Register" element={<Register />}/>
      </Routes>
      </Router>
      
    </div>
    
  );
}
  
export default App;
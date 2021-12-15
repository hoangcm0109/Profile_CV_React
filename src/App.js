import React, { useState } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro"
import Portfolio from "./components/Portfolio"
import Work from "./components/Work"
import Comment from "./components/Comment"
import Contact from "./components/Contact"
import Menu from "./components/Menu"
import "./App.scss"

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="App">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="section">
        <Intro />
        <Portfolio />
        {/* <Work auto={true} />
        <Comment />
        <Contact /> */}
      </div>
    </div>
  );
}

export default App;

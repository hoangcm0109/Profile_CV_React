import React, { useState } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro"
import Portfolio from "./components/Portfolio"
import Work from "./components/Work"
import Comment from "./components/Comment"
import Contact from "./components/Contact"
import "./App.scss"

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="App">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="section">
        <Intro />
        <Portfolio />
        <Work />
        <Comment />
        <Contact />
      </div>
    </div>
  );
}

export default App;

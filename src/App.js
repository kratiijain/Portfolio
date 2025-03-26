import React  from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Section from "./components/Section";
function App() {
  return(
    <div className="App">
      <Header/>
      <Main/>
      <Contact/>
      <Section/>
    </div>
  );
}
export default App;
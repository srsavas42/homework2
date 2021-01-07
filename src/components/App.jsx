import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Entry from "./Note";
import notes from "../notes";
import "./App.css";

function App() {
  return (
    <div className = "App">
      <Header />
      <Footer />
      {notes.map(function (message) {
        return (
          <Entry
            key = {message.key}
            title = {message.title}
            content = {message.content}
          />
        );
      })}
    </div>
  );
}

export default App;
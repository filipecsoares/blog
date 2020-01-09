import React from 'react';
import './App.css';
import PostList from "./components/PostList";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <PostList />
    </div>
  );
}

export default App;

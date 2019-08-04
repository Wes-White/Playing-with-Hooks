import React from 'react';
import './App.css';

function Box(props) {
  //this is the child rendered by parent
  return (
    <div className="App">
      <h1>React Hooks Playground</h1>
      <p>{props.text}</p>
    </div>
  );
}

function App() {
  //this is the parent
  return (
    <div>
      <Box text="Hi, Wesley from app props." />;
    </div>
  );
}

export default App;

import React from "react";
import {
  Routes,
  Route,
  Navigate,
  useParams
} from "react-router-dom";

const Home = (props) => {
  return (
    <h1>Welcome</h1>
  )
}

const Input = (props) => {

  const { input } = useParams()

  return (
    isNaN(input) ?
      <h1>The word is: {input}</h1> :
      <h1>The number is: {input}</h1>
  )
}

const InputColorBG = (props) => {

  const { input, color, background } = useParams()

  return (
    isNaN(input) ?
      <h1 style={{ color: color, backgroundColor: background }}>The word is: {input}</h1> :
      <h1 style={{ color: color, backgroundColor: background }}>The number is: {input}</h1>
  )
}

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/:input" element={<Input />} />
        <Route path="/:input/:color/:background" element={<InputColorBG />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

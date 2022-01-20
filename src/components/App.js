import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([])
  const [index, setIndex] = useState(0)
  const [eatenSushi, setEatenSushi] = useState([])
  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(data => setSushi(data))
  },[])
  const sushiToSlice = [...sushi]
  const sushiSlice = sushiToSlice.slice(index, index+4)
  function indexPlusFour () {
    setIndex(index => index+4)
  }
  return (
    <div className="app">
      <SushiContainer sushi={sushiSlice} indexPlusFour={indexPlusFour} />
      <Table />
    </div>
  );
}

export default App;

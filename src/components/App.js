import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [shownSushi, setSushi] = useState([])
  const [sushiIndex, setSushiIndex] = useState(0)
  const [cash, setCash] = useState(100)
  const [plates, setPlates] = useState([])

  const onMoreSushi = () => setSushiIndex(sushiIndex+4)
  
  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => setSushi(data.slice(sushiIndex,sushiIndex+4)))
  }, [sushiIndex])
  
  const eating = (price) => {
    if (price > cash) return false
    setCash(cash-price)
    setPlates([...plates, "plate"])
    return true
  }

  return (
    <div className="app">
      <SushiContainer 
        shownSushi={shownSushi}
        onMoreSushi={onMoreSushi}
        eating={eating}
      />
      <Table 
        cash={cash}
        plates={plates}
      />
    </div>
  );
}

export default App;

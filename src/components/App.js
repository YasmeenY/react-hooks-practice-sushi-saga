import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushi, setSushi] = useState([])
  const [budget, setBudget] = useState(100)

  useEffect(()=>{
    fetch(API)
    .then(r=>r.json())
    .then(data => {
      const sushi = data.map (s => {
        return {...s, eaten:false}
      })
      setSushi(sushi)
    })
  },[])

  function budgetHandler(value){
    setBudget(value)
  }

  function sushiEaten(eatenSushi){
    if(budget >= eatenSushi.price){
      const s = sushi.map(s => 
        s.id === eatenSushi.id ? {...s, eaten:true} : s
      )
      setSushi(s)
    }
  }

  const emptyPlates = sushi.filter(s => s.eaten)

  return (
    <div className="app">
      <SushiContainer sushi={sushi} budgetHandler={budgetHandler} sushiEaten={sushiEaten} budget={budget}/>
      <Table budget={budget} plates={emptyPlates}/>
    </div>
  );
}

export default App;

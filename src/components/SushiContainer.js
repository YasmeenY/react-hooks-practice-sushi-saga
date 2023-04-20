import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushi, budgetHandler, sushiEaten, budget}) {

  const [sushiCount, setSushiCount] = useState(0)

  const limitSushi = sushi.slice(sushiCount, sushiCount+4)

  const displaySushi = limitSushi.map(s => {
    return(
      <Sushi
        key={s.id}
        sushi={s}
        budgetHandler={budgetHandler}
        sushiEaten={sushiEaten}
        budget={budget}
      />
    )
  })

  function handleMoreButton(){
    setSushiCount(sushiCount + 4 )
  }
  return (
    <div className="belt">
      {displaySushi}
      <MoreButton handleMoreButton={handleMoreButton}/>
    </div>
  );
}

export default SushiContainer;

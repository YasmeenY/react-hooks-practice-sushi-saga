import React from "react";

function Sushi({sushi, budgetHandler, sushiEaten, budget}) {

  const { name, img_url, price, eaten } = sushi;

  function handleClick(){
    if(budget >= sushi.price){
      budgetHandler(budgets => budgets - price)
    }
    else {
      alert("Not Enough Money")
    }
    if(!eaten){
      sushiEaten(sushi)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {eaten ? null : (
          <img
            src={img_url}
            alt={name + " Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;

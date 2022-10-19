import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({shownSushi, onMoreSushi, eating}) {
  const sushiElements = shownSushi.map(sushi => {
    return (
    <Sushi 
      key={sushi.id} 
      name={sushi.name}
      image={sushi.img_url}
      price={sushi.price}
      eating={eating}
    />
    )})

  return (
    <div className="belt">
      {sushiElements}
      <MoreButton
        handleClick={onMoreSushi}
      />
    </div>
  );
}

export default SushiContainer;

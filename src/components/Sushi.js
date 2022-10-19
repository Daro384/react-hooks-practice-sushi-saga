import React,{useState} from "react";

function Sushi({name, image, price, eating}) {
  const [eaten, setEaten] = useState(false)

  const handleClick = () => {
    if (eating(price)) setEaten(true)
  }
  
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {eaten ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;

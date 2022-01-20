import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushi, indexPlusFour}) {
  return (
    <div className="belt">
      {sushi.map(data => (<Sushi key={data.id} name={data.name} image={data.img_url} price={data.price}/>))}
      <MoreButton indexPlusFour={indexPlusFour}/>
    </div>
  );
}

export default SushiContainer;

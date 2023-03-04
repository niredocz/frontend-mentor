import React from "react";

const FlagCard = ({src, alt, title}) => {
  return (
    <div className="flagCard bg-white rounded-md shadow-md text-center">
      <img className="imgCard" src={src} alt={alt} />

      <div className="content p-4">
        <h1 className="text-lg">{title}</h1>
      </div>
    </div>
  );
};

export default FlagCard;

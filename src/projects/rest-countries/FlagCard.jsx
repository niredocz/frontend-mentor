import React from "react";

const FlagCard = ({ src, alt, countryName, population, region, capital }) => {
  return (
    <div className="flagCard bg-white rounded-md shadow-md">
      <img className="imgCard" src={src} alt={alt} />

      <div className="content p-4">
        <h1 className="text-lg font-bold mb-2">{countryName}</h1>
        <h5>
          <span className="font-bold">Population:</span>{" "}
          {population.toLocaleString("en-US")}
        </h5>
        <h5>
          <span className="font-bold">Region:</span> {region}
        </h5>
        <h5>
          <span className="font-bold">Capital:</span> {capital}
        </h5>
      </div>
    </div>
  );
};

export default FlagCard;

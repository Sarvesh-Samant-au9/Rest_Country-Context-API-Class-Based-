import React from "react";
import { Consumer } from "../../Context/CountryInfo";
import Country from "./Country";

const Countries = ({ props }) => {
  return (
    <Consumer>
      {(value) => {
        const { allCountries } = value;
        // console.log(allCountries);
        return (
          <>
            {allCountries.lenght !== 0 ? (
              <>
                <div className="row">
                  {allCountries.map((ele, index) => (
                    <>
                      <Country key={index} info={ele} />
                    </>
                  ))}
                </div>
              </>
            ) : (
              <h1 className="text-center text-warning">Loading....</h1>
            )}
          </>
        );
      }}
    </Consumer>
  );
};

export default Countries;

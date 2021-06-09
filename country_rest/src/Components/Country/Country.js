import React from "react";
import { Link } from "react-router-dom";
// import { DETAILED_COUNTRY } from "../../Action";
import { Consumer } from "../../Context/CountryInfo";

const Country = ({ info }) => {
  // console.log(info);
  const { name, capital, subregion, region, alpha3Code, flag } = info;

  return (
    <Consumer>
      {(value) => {
        // console.log(value);
        return (
          <>
            <div
              className="col-12 col-md-4 mx-auto mt-2 mb-3"
              style={{ width: "10rem", minHeight: "100%" }}
            >
              <div
                className="card"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "whitesmoke",
                  boxShadow: "1px 2px 15px  rgba(0, 0, 0, 0.418)",
                }}
              >
                <img className="card-img-top" src={flag} alt="countryFlag" />
                <div className="card-body">
                  <h5 className="card-title text-primary">{name}</h5>
                  <h6 className="card-text">Capital City - {capital}</h6>
                  <h6 className="card-text">
                    Region <i className="fas fa-map-marked"></i> - {region}
                  </h6>
                  <h6 className="card-text">SubRegion - {subregion}</h6>
                  <Link
                    to={`/country/${alpha3Code}`}
                    className="btn btn-outline-primary"
                  >
                    More Details..
                  </Link>
                </div>
              </div>
            </div>
          </>
        );
      }}
    </Consumer>
  );
};

export default Country;

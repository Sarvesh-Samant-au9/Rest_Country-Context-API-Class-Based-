import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../../Context/CountryInfo";
import axios from "axios";
const DetailedCountry = (props) => {
  const [idCountry, setIdCountry] = useState(props.match.params.id);
  console.log(idCountry);
  const [detailedInfo, setDetailedInfo] = useState([]);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  // console.log(numberWithCommas(3972920374))

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/alpha/${idCountry}`)
      .then((resp) => setDetailedInfo(resp.data));
  }, [idCountry]);
  // console.log(props.match.params.id);
  return (
    <Consumer>
      {(value) => {
        console.log(value);
        console.log(detailedInfo);
        return (
          <div className="container">
            <img
              className="img-fluid text-center mt-4"
              src={detailedInfo.flag}
              alt={detailedInfo.name}
              style={{
                width: "90vw",
                margin: "auto",
                display: "block",
                height: "55vh",
              }}
            />
            <h2 className="text-primary text-center">{detailedInfo.name}</h2>
            {detailedInfo.borders && (
              <>
                <h4 className="text-danger">Bordering Nations</h4>
                {detailedInfo.borders.map((e) => (
                  <Link
                    key={e}
                    className="btn btn-outline-success px-2 mx-2 mb-2"
                    to={`/country/${e}`}
                    onClick={() => {
                      setIdCountry(e);
                    }}
                  >
                    {e}
                  </Link>
                ))}{" "}
              </>
            )}
            <div className="alert alert-warning" role="alert">
              <h4 className="text-dark">
                Capital-city{" "}
                <span className="text-danger">{detailedInfo.capital}</span>
              </h4>
              <h5>
                Population{" "}
                {detailedInfo.population &&
                  numberWithCommas(detailedInfo.population)}
              </h5>
              <h5>
                Land Area{" "}
                {detailedInfo.area && numberWithCommas(detailedInfo.area)}
              </h5>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default DetailedCountry;

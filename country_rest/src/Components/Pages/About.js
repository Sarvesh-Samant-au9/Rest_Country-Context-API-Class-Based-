import React from "react";
import Iconutils from "./AboutUtilities/Iconutils";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div class="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="text-center display-3">About App</h1>
          <h2 className="text-center">
            Rest Countries <i className="fas fa-atlas"></i>
          </h2>
          <p className="lead">
            The App Gives info about the whole Countries Around World and also
            <span className=" badge badge-success">
              <Iconutils names="fas fa-filter" />
              Filter
            </span>
            ,
            <span className="badge badge-warning">
              Search
              <Iconutils names="fas fa-search" />
            </span>{" "}
          </p>
          <h4 className="text-success">Extra Things will be added Like</h4>
          <ul className="list-group">
            <li className="list-group-item list-group-item-success">
              Corona Graphs and Corona Status
              <Iconutils names="fas fa-clinic-medical" />
            </li>
            <li className="list-group-item list-group-item-danger">
              Currency Conversions
              <Iconutils names="fas fa-dollar-sign" />
            </li>
            <li className="list-group-item list-group-item-warning">
              Language Translations
              <Iconutils names="fa fa-language" />
            </li>
            <li className="list-group-item list-group-item-info">
              Weather Api
              <Iconutils names="fas fa-cloud-meatball" />
            </li>
            <li className="list-group-item list-group-item-light">
              Population and Land Charts
              <Iconutils names="far fa-chart-bar" />
              <Iconutils names="fas fa-chart-pie" />
            </li>
          </ul>
          <Link className="btn btn-outline-danger mt-3" to="/">
            Return Back
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;

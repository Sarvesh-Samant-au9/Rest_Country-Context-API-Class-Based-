import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="container-fluid">
      <h1 className="text-center">
        <span className="text-danger">404 Error</span>
        Page Not Found
      </h1>
      <p className="lead">The Page seems to be unavailable</p>
      <Link to="/" className="btn btn-outline-danger mb-3">
        Get Back to Home Page
      </Link>
    </div>
  );
};

export default NotFound;

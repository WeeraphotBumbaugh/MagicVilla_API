import React from "react";
import { Link } from "react-router-dom";
import "./styles/home.css";

function Home() {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-8">
          <h1 className="display-4 mb-5">Welcome to Villa Inc.</h1>
          <p className="lead mb-5">
            Welcome to Villa Inc., a dynamic web application that showcases my
            skills in React, JavaScript, and C# by providing a user-friendly
            platform for browsing and managing a catalog of high-end villas.
            Whether you're a prospective guest looking for the perfect vacation
            rental or a homeowner seeking to list and manage your property, our
            easy-to-use CRUD operations make it simple to find and book your
            ideal villa. Explore our collection of stunning properties today and
            experience the ultimate in luxury vacation rentals.
          </p>
          <div className="d-flex flex-column flex-lg-row">
            <Link
              to="/catalog"
              className="btn btn-primary btn-lg me-lg-4 mb-3 mb-lg-0"
            >
              Browse Catalog
            </Link>
            <Link to="/create" className="btn btn-secondary btn-lg">
              Create Villa
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

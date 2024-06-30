import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark" style={{ borderBottom: "1px solid white" }}>
        <div className="container">
          <a className="navbar-brand text-white" href="#">
            Library Catalog
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link className="nav-item nav-link active text-white" to="/">Home</Link>
              <Link className="nav-item nav-link active text-white" to="/login">Login</Link>
              <Link className="nav-item nav-link active text-white" to="/signup">Signup</Link>
              <Link className="nav-item nav-link active text-white" to="/books">Books</Link>
              <Link className="nav-item nav-link active text-white" to="/addBooks">Add Books</Link>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

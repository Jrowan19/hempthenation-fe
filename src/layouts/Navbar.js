import React from 'react';
import { Link } from '@reach/router';

const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top mb-5 bg-light bottomBorder">
        <Link className="itemsBanner m-2" to="/">
          <span class="fa-stack fa-lg fa-xl">
            <i class="fas fa-circle fa-stack-2x text-success "></i>
            <i class="fas fa-circle fa-stack-1x text-warning"></i>
            <i class="fas fa-leaf fa-stack-1x fa-inverse text-white"></i>
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active ">
              <Link className="items m-3" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="items m-3" to="/cbdoil">
                CBD Oil <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mr-5 justify-content-start ">
            <li className="nav-item  ml-5">
              <Link className="items" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link className="items" to="/signup">
                Sign Up
              </Link>
            </li>
          </ul>

          <form className="form-inline my-2 my-lg-0 mr-5">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Link className="mr-3 fixed-end" to="/">
              <svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
                class="bi bi-search text-success"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                />
                <path
                  fill-rule="evenodd"
                  d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                />
              </svg>
            </Link>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default navbar;

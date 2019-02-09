import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import './Navbar.scss'

export default function Navbar(props) {
  return (
    <nav className="Navbar">
      <div>
        <Link to='/' className="">
          <h2 className="Navbar__logo">Get Git</h2>
        </Link>
      </div>
      <div>
        <h2 className="Navbar__pageTitle">{props.pageTitle}</h2>
      </div>
      {props.isExercise ?
        <div className="Navbar__question">
          <h2>?</h2>
        </div> :
        <div></div>
      }
    </nav>
  );
}

Navbar.propTypes = {
  pageTitle: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  isExercise: false
};

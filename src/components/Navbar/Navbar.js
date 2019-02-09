import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import './Navbar.scss'

export default function Navbar(props) {
  return (
    <nav className={`Navbar${props.darkMode ? '--dark' : ''}`}>
      <div>
        <Link to='/'>
          <h2 className={`Navbar__logo${props.darkMode ? '--dark' : ''}`}>Get Git</h2>
        </Link>
      </div>
      <div>
        <Link to='/'>
          <h2 className={`Navbar__page-title${props.darkMode ? '--dark' : ''}`}>{props.pageTitle}</h2>
        </Link>
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
  pageTitle: PropTypes.string.isRequired,
  isExercise: PropTypes.bool.isRequired
};

Navbar.defaultProps = {
  isExercise: false
};

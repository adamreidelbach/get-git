import React from 'react'
import PropTypes from 'prop-types'
import { Button, Popover, PopoverBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Navbar.scss'

const Navbar = ({ darkMode, pageTitle, isExercise, currentHint, isOpen, toggle }) => {
  return (
    <nav className={`Navbar${darkMode ? '--dark' : ''}`}>
      <div>
        <Link to='/'>
          <h2 className={`Navbar__logo${darkMode ? '--dark' : ''}`}>Get Git</h2>
        </Link>
      </div>
      <div>
        <Link to='/'>
          <h2 className={`Navbar__page-title${darkMode ? '--dark' : ''}`}>{pageTitle}</h2>
        </Link>
      </div>
      {isExercise ?
        <div className="Navbar__question">
          <Button id="hint" type="button" className="Navbar__question-mark">
            ?
          </Button>
          <Popover placement="bottom" isOpen={isOpen} target="hint" toggle={toggle}>
            <PopoverBody>{currentHint}</PopoverBody>
          </Popover>
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

export default Navbar;

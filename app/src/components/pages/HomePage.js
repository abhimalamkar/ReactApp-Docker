import React from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import {logout} from "../../actions/auth";

const HomePage = ({ isAuthenticated, logout }) => {
    return (
        <div>
            <h1>Home Page</h1>
            {isAuthenticated ? (
            <button onClick={() => logout()}>Logout</button>
            ) : <Link to="/login">Login</Link> }
        </div>
    );
};

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
  };

function mapStateToProps(state) {
    return {
      isAuthenticated: !!state.user.uid
    };
}

export default connect(mapStateToProps, { logout })(HomePage);
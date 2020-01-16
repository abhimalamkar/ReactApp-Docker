import React from "react";
import PropTypes from "prop-types";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import './top-navigation.css'

import * as actions from "../../actions/auth";

const TopNavigation = ({ user, logout }) => (
  <Menu pointing secondary color='grey' inverted>
    <Menu.Item as={Link} to="/dashboard">
      Dashboard
    </Menu.Item>
    {/* {hasBooks && (
      <Menu.Item as={Link} to="/books/new">
        Add New Book
      </Menu.Item>
    )} */}

    <Menu.Menu position="right">
      <Dropdown trigger={<Image avatar src="https://react.semantic-ui.com/images/avatar/large/matthew.png"/>} style={{marginRight: 16, padding: 8}}>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
);

TopNavigation.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired
  }).isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user 
 };
}

export default connect(mapStateToProps, { logout: actions.logout })(
  TopNavigation
);
import React from 'react';
import PropTypes from "prop-types";
import { Route } from 'react-router-dom';
import { connect } from "react-redux";

import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'
import TopNavigation from './components/navigation/TopNavigation'
import { Container } from 'semantic-ui-react';

const App = () => <div>
  <TopNavigation />
  <Container>
    <Route path="/" exact component={HomePage}></Route>
    <Route path="/login" exact component={LoginPage}></Route>
  </Container>
</div>

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.uid
  };
}

export default connect(mapStateToProps)(App);

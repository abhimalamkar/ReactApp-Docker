import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Header, Modal } from 'semantic-ui-react'

import { firebase } from '../../firebaseUtil'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { login } from '../../actions/auth'

class LoginPage extends React.Component {

    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            // firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => {
                this.props.history.push('/')
            }
        }
    }

    render() {
        return (
            <Modal size="mini" open={true}>
                <Header textAlign='center' color='grey'>Login/Sign up</Header>
                <Modal.Content image>
                    <div className="ui container">
                        <StyledFirebaseAuth
                            uiConfig={this.uiConfig}
                            firebaseAuth={firebase.auth()} />
                    </div>
                </Modal.Content>
            </Modal>
        )
    }
}

LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    isAuthenticated: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
    console.log(state.user.uid)
    return {
      isAuthenticated: !!state.user.uid
    };
}

export default connect(mapStateToProps, { login })(LoginPage);

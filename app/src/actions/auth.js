import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types'
import api from '../api'
import { firebase } from '../firebaseUtil'

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
})

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
});


export const login = (user) => (dispatch) => {
    localStorage.user = user
    dispatch(userLoggedIn(user))
}

export const logout = () => dispatch => {
    firebase.auth().signOut()
        .then(() => {
            localStorage.removeItem("user");
            dispatch(userLoggedOut());
        })
        .catch((error) => {
            console.log(error)
        });
};
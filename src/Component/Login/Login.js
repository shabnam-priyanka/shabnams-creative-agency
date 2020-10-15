import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import google from '../../images/Gicon.png';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logos/logo.png';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);



    const provider = new firebase.auth.GoogleAuthProvider();
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    const googleSignIn = () => {
        console.log('click');
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                history.replace(from)
                // This gives you a Google Access Token. You can use it to access the Google API.
                //var token = result.credential.accessToken;
                // The signed-in user info.
                //var user = result.user;
                // ...
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }
    return (

        <div>

            <div>
                <img className="img-fluid " src={logo} alt="" className='logos' />
            </div>

            <div className='login p-5' onClick={googleSignIn} style={{ cursor: "pointer" }} >
                <h3 >Login with</h3>

                <img className="img-fluid " src={google} alt="" style={{ height: '25px', width: '30px' }} /> Login with Google+

            <p>Don't have account? create account</p>

            </div>

        </div>

    );
};

export default Login;

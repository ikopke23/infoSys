import { useOidcAccessToken, useOidc, useOidcIdToken } from '@axa-fr/react-oidc'
import React from 'react'
import { Link } from 'react-router-dom'
import Authenticating from '../callbacks/Authenticating'
import AuthenticationError from '../callbacks/AuthenticationError'
import SessionLost from '../callbacks/SessionLost'
import UserInfo from '../UserInfo'


const Home = () => {
    // important hooks
    // const { accessTokenPayload } = useOidcAccessToken()   // this contains the user info in raw json format
    // const userInfo = accessTokenPayload as UserInfo       // 
    // const { idToken, idTokenPayload } = useOidcIdToken()  // this is how you get the users id token
    // const { login, logout, isAuthenticated } = useOidc()  // this gets the functions to login and logout and the logout state

    return (
        
        



        <div className="home wrapper">
            <h1 className="display-3">Welcome to InfoSys</h1>
            <p className="lead">This is the message currently running on InfoSys:</p>
            <h1 className="display-3">Queued Messages</h1>
            <p className="display-6">Active Message:</p>
            <div className="card text-white bg-primary mb-3 max-card-Width">
                <div className="card-header">Active Message: Time left: however data works</div>
                <div className="card-body">
                  <h4 className="card-title text-align-center">Message Data</h4>
                  <p className="card-text">This is the demo would go</p>
                </div>
            </div>
            <br className="buffer"></br>
            
        </div>
    )
}

export default Home
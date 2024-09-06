import { useOidcAccessToken, useOidc, useOidcIdToken } from '@axa-fr/react-oidc'
import React from 'react'
import { Link } from 'react-router-dom'
import Authenticating from '../callbacks/Authenticating'
import AuthenticationError from '../callbacks/AuthenticationError'
import SessionLost from '../callbacks/SessionLost'
import UserInfo from '../UserInfo'

const Testing = () => {

    console.log("test");

    return (
        
        <div>
            <h1 className="display-3">Welcome to InfoSys</h1>
            <p className="lead">This is the message currently running on InfoSys:</p>
            
            
        </div>
    )
}

export default Testing
import { useOidcAccessToken, useOidc, useOidcIdToken } from "@axa-fr/react-oidc";
import React from "react";
import { Link } from "react-router-dom";
import Authenticating from "../callbacks/Authenticating";
import AuthenticationError from "../callbacks/AuthenticationError";
import SessionLost from "../callbacks/SessionLost";
import UserInfo from "../UserInfo";

const Admin = () => {
  // important hooks
  // const { accessTokenPayload } = useOidcAccessToken()   // this contains the user info in raw json format
  // const userInfo = accessTokenPayload as UserInfo       //
  // const { idToken, idTokenPayload } = useOidcIdToken()  // this is how you get the users id token
  // const { login, logout, isAuthenticated } = useOidc()  // this gets the functions to login and logout and the logout state

  return (
    <div>
      <h1 className="display-3">This is where you submit things</h1>
      <p className="lead"></p>

      <div className="card text-white bg-primary mb-3">
        <div className="card-header">Header</div>
        <div className="card-body">
          <h4 className="card-title">Primary card title</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;

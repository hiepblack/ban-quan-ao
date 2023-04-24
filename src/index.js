import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { AuthContextProvider } from "./context/AuthContext.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="62807686228-21uqb3kaecj4sbd4ph2s00o3aamtm1qd.apps.googleusercontent.com">
      <AuthContextProvider>
        <Router>
          <App />
        </Router>
      </AuthContextProvider>
    </GoogleOAuthProvider>
  </Provider>
);

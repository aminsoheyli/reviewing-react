import React from "react";
import { Redirect, Route } from "react-router-dom";
import auth from "../../services/authService";

const ProtectedComponent = ({ component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!auth.getCurrentUser()) return <Redirect to="/login" />;
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedComponent;

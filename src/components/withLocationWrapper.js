import { Component } from "react";
import { useLocation } from "react-router-dom";

const withLocationWrapper = (Component) => (props) => {
    const location =useLocation();
    return <Component {...props} location={location}/>;
}

export default withLocationWrapper;
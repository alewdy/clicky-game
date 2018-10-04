import React from "react";
import "./nav.css";

const Nav = props => (
    <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
            
            <ul className="nav navbar-header">
                <li className="active"><a id="warning">{props.warning}</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><a id="score">Score: {props.score} | </a></li>
                <li><a id="topscore">Top Score: {props.topscore}</a> </li>
            </ul>
        </div>
    </nav>
);

export default Nav;
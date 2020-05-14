import React, {useContext} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";


export const NavBar = () => {
    const auth = useContext(AuthContext),
          history = useHistory();

    const logoutHandeler = event => {
      event.preventDefault();

        auth.logout();
        history.push('/')
    };

    return (
        <nav>
            <div className="nav-wrapper teal lighten-2">

                <ul id="nav-mobile" className="right hide-on-med-and-down waves-light">
                    <li><NavLink to="/" exact>HOME</NavLink></li>

                    <li><a href="/" className="purple darken-4" onClick={logoutHandeler}>Logout</a></li>
                </ul>
            </div>
        </nav>
    )
}

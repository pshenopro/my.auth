import React, {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

export default () => {
    const auth = useContext(AuthContext);

    return (
        <div>
            <h1>HOME PAGE</h1>
        </div>
    )
}
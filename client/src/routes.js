import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import AuthPage from "./pages/AuthPage";
import Home from './pages/Home'


export const useRoutes = isAuth => {
    if (isAuth) {
        return (
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>


                <Redirect to={'/'} />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path='/' exact>
                <AuthPage/>
            </Route>
        </Switch>
    )
};
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import {NavBar} from "./components/navbar";
import Modal from './components/modal'
import {modalHandler} from "./redux/actions";
import {connect} from "react-redux";
import 'materialize-css'

function App({modals}) {

    const {token, login, logout, userId} = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);


  return (
     <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated}}>
         <Router>
             {isAuthenticated ? <NavBar /> : null}
             <div className={'container start-page'}>
                 {routes}
             </div>
         </Router>

         {modals ? <Modal /> : null}

     </AuthContext.Provider>
  );
}

const mapStateToProps = state => {
    return {
        modals: state.posts.modal
    }
};

const mapDispatchToProps = {
    modalHandler,
};

export default connect(mapStateToProps, mapDispatchToProps)(App)

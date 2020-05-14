import React, {useContext, useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/AuthContext";

export default () => {
    const auth = useContext(AuthContext);
    const message = useMessage();
    const {load, err, req, clear} = useHttp();
    const [form, setForm] = useState({
        login: '',
        password: '',
    });

    useEffect(()=> {
        message(err);
        clear()
    }, [err, message, clear]);

    const checngeHandler = evt => {
        setForm(
            {...form, [evt.target.name]: evt.target.value}
        )
    };

    const loginHandler = async ($event) => {
        $event.preventDefault();
        try {
            const data = await req('/login', 'POST', {...form});
            auth.login(data.data.token);
        }  catch (e) {

        }

    };


    return (

       <div className="row auth-page">
           <div className="col s8 container">
               <h1>Auth Page</h1>

               <form onSubmit={loginHandler} className="card blue-grey darken-1">
                   <div className="card-content white-text">
                       <span className={'card-title'}>LOGIN</span>

                       <div>
                           <div className="input-field">
                               <input
                                   id="email"
                                   type="text"
                                   name='login'
                                   autoComplete='off'
                                   onChange={checngeHandler}
                                   disabled={load}
                                   className="validate" />

                               <label htmlFor="email">Login</label>
                           </div>

                           <div className="input-field">
                               <input
                                   id="password"
                                   type="password"
                                   name="password"
                                   autoComplete={'off'}
                                   onChange={checngeHandler}
                                   className="password" />

                               <label htmlFor="password">Password</label>
                           </div>
                       </div>

                   </div>
                   <div className="card-action">
                       <button type={'submit'} disabled={load} className="btn yellow black-text" style={{marginRight:'20px'}}>Login</button>
                   </div>
               </form>
           </div>
       </div>
    )
}
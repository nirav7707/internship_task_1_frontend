import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
export default function LoginRegister() {
    return (
        <div className="containerLogin">
            <div className="loginBox">
                <div className="routerLoginRegister">
                    <div><Link to="/login" className="link">LOGIN</Link></div>
                    <div><Link to="/register" className="link">REGISTER</Link></div>
                </div>
                <div>
                    <div >
                        <Switch>
                            <Route path="/login" component={LoginForm} />
                            <Route path="/register" component={RegisterForm} />

                            </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React, {useState, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, QUESTIONS_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from  "../index";
import Button from "react-bootstrap/Button";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        let data;
        try {
            if (isLogin){
                data = await login(email, password);
            }else{
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(QUESTIONS_ROUTE)
        }catch (e){
            //alert("Entered a wrong username or password")
            alert(e.response.data.message)
        }
    }

    return (
        <Container>
        <form>
            <h2 className="mt-4">{isLogin ? 'Login' : 'Registration'}</h2>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       placeholder="Enter email"
                       value={email}
                       onChange={e => setEmail(e.target.value)}
                />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                        else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
            </div>

            {isLogin ?
                <p>Don't have an account? <NavLink to={REGISTRATION_ROUTE}>Sign Up</NavLink></p>
                :
                <p>Have an account? <NavLink to={LOGIN_ROUTE}>Login</NavLink></p>}
            <Button
            onClick={click}
            >{isLogin ? 'Login' : 'Sign Up'}</Button>

        </form>
        </Container>
    );
});

export default Auth;
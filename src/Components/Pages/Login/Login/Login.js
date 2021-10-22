import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Login = () => {
    const { handlePasswordSignin , signInUsingGoogle , setError , setLoading } = useAuth()

    const locaiton = useLocation()
    const history = useHistory()
    console.log(locaiton);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const changeHandler = (e) => {
        if (e.target.name === 'email') {
            setEmail(e.target.value)
        } else if (e.target.name === 'password') {
            setPassword(e.target.value)
        }
    }
    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(res => {
            locaiton.state ? history.push(locaiton.state.from.pathname) : history.push('/')
        })
        .catch((error)=> {
            setError(error.message)
            console.log(error)
        })
        .finally(() => { setLoading(false) })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        handlePasswordSignin(email, password).then((result) => {
            locaiton.state ? history.push(locaiton.state.from.pathname) : history.push('/')
        }).catch((err) => { })
    }

    return (
        <div style={{height:'85vh'}}>
            <h2>Login</h2>
            <form onSubmit={submitHandler}>
                <input type="email" name="email" id="" placeholder="Your Email" onChange={changeHandler} className="p-1 m-2"/>
                <br />
                <input type="password" name="password" id="" onChange={changeHandler} className="p-1 m-2"/>
                <br />
                <input type="submit" value="Login" className="p-1 m-2"/>
            </form>
            <p>new to doctor's clinic? <Link to="/register">Create Account</Link></p>
            <div>-------or----------</div>
            <button
                className="btn btn-warning"
                onClick={handleGoogleLogin}
            >Google Sign In</button>
        </div>
    )
}

export default Login;
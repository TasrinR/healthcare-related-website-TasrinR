import React, { useState } from 'react';
import { Link , useLocation , useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';



const Register = () => {
    const { handlePasswordSignup, updateProfile, auth , signInUsingGoogle, setLoading , setError , error} = useAuth()

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const locaiton = useLocation()
    const history = useHistory()


    const changeHandler = (e) => {
        if (e.target.name === 'name') {
            setUserName(e.target.value)
        } else if (e.target.name === 'email') {
            setEmail(e.target.value)
        } else {
            setPassword(e.target.value)
        }
    }

    

    const submitHandler = (e) => {
        e.preventDefault()
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setEmailError('Please insert a valid email');
            return;
        }
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }
        handlePasswordSignup(email, password).then((result) => {
            updateProfile(auth.currentUser, {
                displayName: userName,
              }).then(() => {
                console.log('Name is set');
                window.location.reload();
              }).catch((error) => {
                console.log('Error setting user name');
              });
        }).catch((err) => {})
    }
    
    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(res => {
            locaiton.state ? history.push(locaiton.state.from.pathname) : history.push('/')
        }).catch((error)=> {
            setError(error.message)
            console.log(error)
        })
        .finally(() => { setLoading(false) })
    }


    return (
        <div className="login-form">
            <div style={{height:'85vh'}}>
                <h2>Register: Create Account</h2>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder="User name" name='name' onChange={changeHandler} className="p-1 m-2" />
                    <br />
                    <input type="email" placeholder="Your email" name='email' onChange={changeHandler} className="p-1 m-2"/>
                    <br />
                    <div style={{color: 'red'}}>{emailError}</div>
                    <input type="password" placeholder="Password" name='password' onChange={changeHandler} className="p-1 m-2" />
                    <br />
                    <div style={{color: 'red'}}>{error}</div>
                    <input type="submit" value="Register" className="p-1 m-2" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>----------or-------------</div>
                <button className="btn btn-warning" onClick={handleGoogleLogin}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;
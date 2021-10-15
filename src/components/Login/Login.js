import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { user, error, signInGoogle, signOutGoogle } = useContext(AuthContext)

    const handleToEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleToPass = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <div>
               {
                   user.email ? <h1> Welcome {user.displayName}</h1> :  <h1>Log in here </h1>
               }
                <form onSubmit=''>
                    <input style={{ padding: '5px', margin: '2px' }} type="email" name="" id="" placeholder='email' onBlur={handleToEmail} />
                    <br />
                    <input style={{ padding: '5px', margin: '2px' }} type="password" name="" id="" placeholder='password' onBlur={handleToPass} />
                    <br />
                    <input type="submit" value="submit" />

                </form>
                <p>if you new at ema-jhon ? <Link to='/register'>create-account</Link></p>
                <p>

                    or you can log in with {
                    user.email ? <button  className='btn-regular' onClick={signOutGoogle}>Sign-out</button> : <button onClick={signInGoogle} className='btn-regular'>Google sign-in</button>
                    
                    
                    } 

                </p>
            </div>
        </div>
    );
};

export default Login;
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <>
            <div style={{textAlign:'center'}}>
                <h1>Register with Ema jhon</h1>
                <form onSubmit=''>
                    <input style={{padding:'5px', margin:'2px'}} type="email" name="" id="" placeholder='enter your email' />
                    <br />
                    <input style={{padding:'5px', margin:'2px'}} type="password" name="" id="" placeholder='enter password' />
                    <br />
                    <input style={{padding:'5px', margin:'2px'}} type="password" name="" id="" placeholder='re-enter password' />
                    <br />
                    <input type="submit" value="Register" />
                </form>

                <p>already register ? <Link to='/login'>Sign in</Link></p>

            </div>
        </>
    );
};

export default Register;
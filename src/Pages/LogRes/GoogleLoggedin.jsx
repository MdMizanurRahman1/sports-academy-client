
import React, { useContext } from 'react';

import { AuthContext } from '../../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';


const GoogleLoggedin = () => {

    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })

            })
    }


    return (
        <div>
            <div className="divider"></div>
            <button onClick={handleGoogleSignIn} className="btn w-full mt-4 bg-white text-black hover:bg-slate-300">
                <FaGoogle className="mr-3 text-red-500 " />
                <span> Login with Google</span>
            </button>
        </div>
    );
};

export default GoogleLoggedin;
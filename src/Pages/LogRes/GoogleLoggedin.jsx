
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';


const GoogleLoggedin = () => {

    const { googleSignIn } = useContext(AuthContext);



    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
            })
            .catch((error) => {
                console.log(error);
            });
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
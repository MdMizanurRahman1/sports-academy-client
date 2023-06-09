import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import GoogleLoggedin from './GoogleLoggedin';

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    title: 'Logged in Successfully',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
            })

    };
    return (
        <div className="hero min-h-screen bg-[#d6f2f2] py-12 ">
            <div className="hero-content flex-col lg:flex-row-reverse bg-[#94c4c4] rounded-lg">
                <div className="lg:text-left w-full shadow-none">
                    <h1 className="text-5xl font-bold text-center mb-6">Login Now!</h1>
                    <img className='w-[500px] rounded-lg ' src="https://i.ibb.co/2PwzkFT/2853458.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#94c4c4]">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="email" name='email' className="input input-bordered" />
                            {errors.email && <span>Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: true })} type="password" name='password' placeholder="password" className="input input-bordered" />
                            {errors.password && <span>Password is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-accent hover:bg-cyan-700" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center pb-3'><small>New Here? <Link to='/register'>Create an account!</Link></small></p>
                    <GoogleLoggedin></GoogleLoggedin>
                </div>
            </div>
        </div>
    );
};

export default Login;
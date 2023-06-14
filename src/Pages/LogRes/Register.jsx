import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import GoogleLoggedin from './GoogleLoggedin';



const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState('')

    const onSubmit = data => {
        if (data.password !== confirmPassword) {
            alert('passwords don not match');
            return;
        }
        console.log(data);

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('https://sports-academy-server-liart.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'user created successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })

                    })
                    .catch(error => console.log(error))
            })
    }

    return (

        <div className="hero min-h-screen bg-[#d6f2f2] py-10">
            <div className="hero-content flex-col lg:flex-row-reverse bg-[#94c4c4] rounded-lg ">
                <div className="lg:text-left w-full">
                    <h1 className="text-5xl font-bold text-center mb-6">Sign Up!</h1>
                    <img className='w-[600px] rounded-lg' src="https://i.ibb.co/mNxcfxk/4673526.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-[#94c4c4]">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                            {errors.name && <span className='text-red-600'>Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                            {errors.photoURL && <span className='text-red-600'>Photo URL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-600'>email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                            })} name='password' placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be six characters</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must be one uppercase and one special character</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                name='confirmPassword' placeholder="Confirm password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-accent hover:bg-cyan-700" type="submit" value="Sign Up" />

                        </div>
                    </form>
                    <p className='text-center'><small>Already Registered? <Link to='/login'>Please LogIn!</Link></small></p>
                    <GoogleLoggedin></GoogleLoggedin>
                </div>
            </div>
        </div>

    );
};

export default Register;
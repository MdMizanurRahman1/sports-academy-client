import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user, loading } = useAuth();

    const onSubmit = data => {
        console.log(data);
    }



    return (
        <div className='w-full my-14 '>
            <h2 className='font-semibold text-2xl text-center'>Add A Class</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="mx-10">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name*</span>

                    </label>
                    <input type="name" placeholder="Type here" className="input input-bordered w-full "
                        {...register("name", { required: true, maxLength: 120 })} />

                </div>
                <div className="form-control w-full mt-2 ">
                    <label className="label">
                        <span className="label-text">Class Image</span>

                    </label>
                    <input type="file" className="file-input file-input-bordered w-full " {...register("image", { required: true })} />

                </div>
                <div className="form-control w-full mt-2 ">
                    <label className="label">
                        <span className="label-text">Instructor Name</span>

                    </label>
                    {user && <input type="instructor_name" value={user.displayName} placeholder="Type here" className="input  input-bordered w-full " {...register("instructor_name", { required: true })} />}

                </div>
                <div className="form-control w-full mt-2">
                    <label className="label">
                        <span className="label-text">Instructor Email</span>

                    </label>
                    <input type="email" value={user.email} placeholder="Type here" className="input input-bordered w-full " {...register("email", { required: true })} />

                </div>
                <div className="flex gap-4">
                    <div className="form-control w-full mt-2">
                        <label className="label">
                            <span className="label-text">Available Seats </span>

                        </label>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full "
                            {...register("seats", { required: true, maxLength: 120 })} />

                    </div>
                    <div className="form-control w-full mt-2">
                        <label className="label">
                            <span className="label-text">Price</span>

                        </label>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full "
                            {...register("price", { required: true, maxLength: 120 })} />

                    </div>
                </div>

                <input type="submit" className="  w-full mt-4 btn btn-accent btn-sm" value="Add A Class" />
            </form>
        </div>
    );
};

export default AddItem;





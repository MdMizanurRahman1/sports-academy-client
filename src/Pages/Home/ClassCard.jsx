import { AiOutlineArrowRight, AiOutlineDollarCircle, AiOutlineNumber, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import useCard from "../../hooks/useCard";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";


const ClassCard = ({ classData }) => {
    const { name, _id, image, instructor_name, seats, price } = classData;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCard();


    const handleAddToCart = (classData) => {
        console.log(classData)
        if (user && user.email) {
            const orderItem = { name, _id, instructor_name, image, price, email: user.email }
            fetch('http://localhost:5000/card', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Oder Item Added',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to course?',

                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Login it!'
            }).then((result) => {
                if (result.isConfirmed) {

                    console.log('/login')
                }
            })
        }
    }




    return (
        <div className='mx-auto'>
            <div className='my-8 justify-center'>
                <div className='card w-96 bg-base-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300'>
                    <figure>
                        <img src={image} className="rounded-t-lg h-3/4" alt="Class Image" />
                    </figure>
                    <div className='card-body'>
                        <h2 className='card-title font-semibold text-xl'>{name}</h2>
                        <h3 className='text-start flex items-center text-lg'>
                            <AiOutlineUser className='mr-2 text-blue-500' /> Instructor: {instructor_name}
                        </h3>
                        <div className='flex gap-3'>
                            <p className='text-start flex items-center'>
                                <AiOutlineNumber className='mr-2 text-blue-500' /> Available seats: {seats}
                            </p>
                            <p className='text-start flex items-center'>
                                <AiOutlineDollarCircle className='mr-2 text-blue-500' /> Price: ${price}
                            </p>
                        </div>
                        <div className='card-actions justify-end mt-3'>
                            <Link>
                                <button onClick={() => handleAddToCart(classData)} className='btn btn-error btn-outline btn-sm flex items-center'>
                                    Select <AiOutlineArrowRight />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;




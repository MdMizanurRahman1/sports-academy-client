import React from 'react';
import usePay from '../../hooks/usePay';

const PaymentHistory = () => {
    const [payments] = usePay();

    return (
        <div className='w-full my-10'>
            <h2 className='uppercase font-bold text-center'>Payment History: {payments.length}</h2>
            <div className="overflow-x-auto mt-5">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr className='uppercase font-semibold'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>TransactionId</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((singleCard, index) =>
                                <tr key={singleCard._id}>
                                    <td>{index + 1}</td>
                                    <td className='text-md font-semibold'>
                                        {singleCard.name}
                                    </td>
                                    <td>{singleCard.email}</td>
                                    <td>{singleCard.transactionId}</td>
                                    <td>{singleCard.date}</td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
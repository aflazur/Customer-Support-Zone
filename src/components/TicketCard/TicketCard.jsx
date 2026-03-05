import React, { use } from 'react';
import ellipse from "../../assets/Ellipse 22.png"


const TicketCard = ({ playerPromise }) => {
    const customerData = use(playerPromise)
    return (

        <div>
            <h1 className="font-bold mb-[16px] text-2xl mt-[80px]">Customer Tickets</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {
                    customerData.map(customer =>

                        <div className=" grid mb-2 border border-red-200 p-4 rounded ">

                            <div className="flex items-center justify-between">
                                <h3 className="font-bold mb-[8px]">{customer.title}</h3>
                                <p className="bg-[#B9F8CF] rounded-2xl flex items-center p-1 gap-2"> <img src={ellipse} alt="" />Status</p>
                            </div>

                            <p className="text-sm text-gray-600 mb-[16px]">
                                {customer.description}
                            </p>

                            <div className="flex justify-between ">
                                <div className="flex justify-between gap-3 ">
                                    <p>#1001</p>
                                    <h4 className="text-red-400 font-medium">HIGH PRIORITY</h4>
                                </div>
                                <div className="flex items-center justify-between gap-3 ">
                                    <p>John Smith</p>
                                    <p>1/15/2024</p>
                                </div>
                            </div>
                       </div>)
                }
            </div>
        </div>
    );
};

export default TicketCard;
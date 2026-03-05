import React, { use } from 'react';
import ellipse from "../../assets/Ellipse 22.png"
import Calender from "../../assets/ri_calendar-line.png"

const TicketCard = ({ playerPromise, handleAddTask, removed }) => {

    const customerData = use(playerPromise)

    return (
        <div>

            <h1 className="font-bold mb-[16px] text-2xl mt-[80px]">
                Customer Tickets
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                {
                    customerData
                    .filter(ticket => !removed.includes(ticket.id))
                    .map(customer =>
                        <div  onClick={()=>handleAddTask(customer)} key={customer.id} >
                            <div key={customer.id} className="grid mb-2 bg-white p-4 rounded">

                            <div className="flex items-center justify-between">

                                <h3 className="font-bold mb-[8px]">
                                    {customer.title}
                                </h3>

                                <p className="bg-[#B9F8CF] rounded-2xl flex items-center p-1 gap-2">
                                    <img src={ellipse} alt="" />
                                    {customer.status}
                                </p>

                            </div>

                            <p className="text-sm text-gray-600 mb-[16px]">
                                {customer.description}
                            </p>

                            <div className="flex justify-between">

                                <div className="flex gap-3">
                                    <p>#1001</p>
                                    <h4 className="text-red-400 font-medium">
                                        {customer.priority}
                                    </h4>
                                </div>

                                <div className="flex gap-3">
                                    <p>{customer.customer}</p>
                                    <p className="flex gap-2 "><img src={Calender} alt="" />{customer.createdAt}</p>
                                </div>

                            </div>
                        </div>
                        </div>
                    )
                }

            </div>

        </div>
    );
};

export default TicketCard;
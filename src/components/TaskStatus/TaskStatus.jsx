import React from 'react';

const TaskStatus = ({ tasks, handleComplete }) => {

    return (

        <div className=" p-4  mt-[80px]">

            <h2 className="font-bold text-xl mb-[16px]">
                Task Status
            </h2>

            {
                tasks.length === 0 ?

                    <p className="text-[#627382]">Select a ticket to add to Task Status</p>

                    :

                    tasks.map(task => (

                        <div key={task.id} className=" rounded-sm p-4 bg-white  mb-3">

                            <p className="font-semibold">{task.title}</p>
                            <button
                                onClick={() => handleComplete(task.id)}
                                className="btn w-full mt-[16px]  bg-[#02A53B] text-white font-semibold"
                            >
                                Complete
                            </button>

                        </div>

                    ))
            }

        </div>

    )

};

export default TaskStatus;
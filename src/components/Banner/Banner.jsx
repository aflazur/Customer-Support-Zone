import React from 'react';

const Banner = () => {
    return (
        <div className="grid md:grid-cols-2 gap-4 p-6">

            <div className=" bg-[] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] ... text-white p-10 rounded text-center">
                <h2 className="text-lg">In Progress</h2>
                <p className="text-4xl font-bold">0</p>
            </div>

            <div className="bg-gradient-to-r from-[#54CF68] to-[#00827A] text-white p-10 rounded text-center">
                <h2 className="text-lg">Resolved</h2>
                <p className="text-4xl font-bold">0</p>
            </div>

        </div>

    );
};

export default Banner;
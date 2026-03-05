import React from 'react';
import plus from '../../assets/ic_outline-plus.png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <h2 className="font-bold text-2xl">CS — Ticket System</h2>
                </div>
                <div className=" flex gap-3 items-center justify-center ">
                    <div className="">
                        <ul className=" hidden md:flex gap-3 font-normal">
                            <li>Home</li>
                            <li>FAQ</li>
                            <li>Changelog</li>
                            <li>Blog</li>
                            <li>Download</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <button className="btn font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"><img src={plus} alt="" /> New Ticket</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
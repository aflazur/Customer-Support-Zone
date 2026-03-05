import React from 'react';
import Twitter from '../../assets/Vector.png'
import Linkedin from '../../assets/Group.png'
import Facebook from '../../assets/Vector (1).png'
import Email from '../../assets/Vector (2).png'

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-black text-white p-[80px]">
                <aside>
                   <h1 className="font-bold">CS — Ticket System</h1>
                    <p className="text-[#A1A1AA]">
                        CS — Ticket System helps businesses manage customer support requests efficiently.
                        Track issues, monitor progress, and resolve tickets faster with our smart support platform.

                    </p>
                </aside>
                <nav>
                    <h6 className="font-medium">Company</h6>
                    <a className="text-[#A1A1AA]">About Us</a>
                    <a className="text-[#A1A1AA]">Our Mission</a>
                    <a className="text-[#A1A1AA]">Contact Saled</a>
                    
                </nav>
                <nav>
                    <h6 className="font-medium">Services</h6>
                    <a className="text-[#A1A1AA]">Products & Services</a>
                    <a className="text-[#A1A1AA]">Customer Stories</a>
                    <a className="text-[#A1A1AA]">Download Apps</a>
                   
                </nav>
                <nav>
                    <h6 className="font-medium">Information</h6>
                    <a className="text-[#A1A1AA]">Privacy Policy</a>
                    <a className="text-[#A1A1AA]">Terms & Conditions</a>
                    <a className="text-[#A1A1AA]">Join Us</a>
                   
                </nav>
                <nav>
                    <h6 className="font-medium">Social Links</h6>
                    <a className="text-[#A1A1AA] flex gap-2"> <img className="bg-white p-1 rounded-full" src={Twitter} alt="" />Twitter</a>
                    <a className="text-[#A1A1AA] flex gap-2 "> <img src={Linkedin} alt="" />Linkedin</a>
                    <a className="text-[#A1A1AA] flex gap-2 "> <img className="bg-white p-1 rounded-full" src={Facebook} alt="" />Facebook</a>
                    <a className="text-[#A1A1AA] flex gap-2 "> <img src={Email} alt="" />Email</a>
                   
                </nav>
            </footer>
            <footer className="footer sm:footer-horizontal footer-center bg-black text-[#FAFAFA] p-4 border-t-1 border-gray-700 ">
                <aside>
                    <p>© 2025 CS — Ticket System. All rights reserved.</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
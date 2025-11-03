
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { LiaWhatsapp } from "react-icons/lia";

export function Footer () {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-indigo-500">
        <div className=" grid grid-cols-1 pl-25 md:grid-cols-2 lg:grid-cols-4 md:pl-30 lg:pl-30">
            <div>
                <p className="text-white font-bold text-2xl mb-2 mt-5">FastCash</p>
                <p className="font-thin text-gray-400">About us</p>
                <p className="font-thin text-gray-400">Contact Us</p>
                <p className="font-thin text-gray-400">Location</p>
            </div>
            <div>
                <p className="text-white font-bold text-2xl mb-2 mt-5">Financial Services</p>
                <p className="text-gray-400 font-thin">Loans</p>
                <p className="text-gray-400 font-thin">Investment</p>
                <p className="text-gray-400 font-thin">Bonds</p>
            </div>
            <div>
                <p className="text-2xl font-bold text-white mb-2 mt-5">Legal</p>
                <p className="font-thin text-gray-400">Privacy policy</p>
                <p className="font-thin text-gray-400">Cookies</p>
                <p className="font-thin text-gray-400">Terms of Use</p>
            </div>
            <div>
                <p className="text-2xl font-bold text-white mb-2 mt-5">Socials</p>
                <div className="flex gap-4">
                  <FaFacebookF className="text-2xl text-gray-400" />
                  <FaInstagram className="text-2xl text-gray-400" />
                  <Link href="https://wa.me/+2349036786060"><LiaWhatsapp className="text-2xl text-gray-400"/></Link>

                </div>
            </div>
        </div>  
             <div className="border-t border-gray-400 pb-5 ">
                  <h1 className="text-center text-gray-400 mt-3"> &copy;{year} FastCash </h1>
             </div>
        </footer>
    )
}

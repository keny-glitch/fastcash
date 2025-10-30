import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
export function Footer () {
     const year = new Date().getFullYear();
    return(
       
          <footer className="bg-indigo-500">
            <div className="grid grid-cols-1 pl-25 md:grid-cols-2 grid-cols-4  md:pl-30 lg:pl-30">                    
            <div>
                <p className="text-white font-bold text-2xl mb-2">FastCash</p>
                <p  className="font-thin text-gray-400">About us</p>
                <p className="font-thin text-gray-400">Contact us</p>
                <p className="font-thin text-gray-400">Location us</p>
            </div>

            <div>
                <p className="text-white font-bold text-2xl mb-2">Financial Services</p>
                <p className="text-white font-bold text-2xl">Loan</p>
                <p className="text-white font-bold text-2xl">Investmaent</p>
                <p className="text-white font-bold text-2xl">Bonds</p>
            </div>

            <div>
                <p className="text-2xl font-bold text-white mb-2">Legal</p>
                <p className="text-2xl font-bold text-white">Private police</p>
                <p className="text-2xl font-bold text-white">Cookies</p>
                <p className="text-2xl font-bold text-white">Terms of Use</p>
            </div>

            <div>
                <p className="text-2xl font-bold text-white">Socials</p>
                <div>
                <FaFacebookF className="text-2xl text-gray-400" />
                <FaInstagram className="text-2xl text-gray-400" />
                <Link href="https:/w"><IoLogoWhatsapp className="text-2xl text-gray-400" /></Link>
                </div>
            </div>
            </div>
            <div className="border-t border-gray-400 pb-5"></div>
            <h1 className="text-center text-gray-400 mt-3">&copy;{year} FastCash</h1>
          </footer>
    )
}
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
<nav className="border-t-4 p-4 text-primary text-2xl font-bold ">
      <ul className="flex space-x-10 justify-center">
        <li><Link href="/" className="hover:text-accent"><FaLinkedin/></Link></li>
        <li><Link href="/" className="hover:text-accent"><FaFacebook/></Link></li>
        <li><Link href="/" className="hover:text-accent"><FaYoutube/></Link></li>
        <li><Link href="/" className="hover:text-accent"><FaTwitter/></Link></li>
        <li><Link href="/" className="hover:text-accent"><FaInstagram/></Link></li>
      </ul>
    </nav>
  )
}

export default Footer
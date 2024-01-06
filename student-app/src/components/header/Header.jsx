import { PiStudentBold } from "react-icons/pi";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header(){
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container border-bottom">
                <Link to={'/'} className="navbar-brand d-flex align-items-center">
                    <PiStudentBold size={40} className="me-2"/>
                    Student App
                </Link>
                <button className="btn btn-signout d-flex align-items-center">
                    <FaSignOutAlt className="me-2" size={18}/>
                    Sign out
                </button>
            </div>
        </nav>
    )
}
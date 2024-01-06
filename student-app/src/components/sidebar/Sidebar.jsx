import { AiFillDashboard } from "react-icons/ai";
import { PiStudentFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
export default function Sidebar(){
    return (
        <aside className="me-3" style={{ minWidth: "200px", height: '500px'}}>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink to="/dashboard" className="nav-link d-flex align-items-center">
                        <AiFillDashboard size={20} className="me-2"/>
                        Dashboard
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/student" className="nav-link">
                        <PiStudentFill size={20} className="me-2"/>
                        Student
                    </NavLink>
                </li>
            </ul>
        </aside>
    )
}
import { NavLink, Outlet, useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { FaPersonMilitaryToPerson } from "react-icons/fa6";
import { IoMdPersonAdd } from "react-icons/io";

export default function StudentPage() {
    const location = useLocation()
    const pathname = location.pathname.split('/').pop()
    const isActive = pathname === 'student' || pathname === 'list'
    return (
        <MainLayout>
            <ul className="nav nav-tabs mb-2">
                <li className="nav-item">
                    <NavLink to={'/student/list'} className={`nav-link d-flex align-items-center ${isActive ? 'active' : ''}`}>
                        <FaPersonMilitaryToPerson className="me-2" />
                        Student List
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'/student/add'} className="nav-link  d-flex align-items-center">
                        <IoMdPersonAdd className="me-2" />
                        Create Student
                    </NavLink>
                </li>
                {/* <li className="nav-item">
                    <NavLink to={'#'} className="nav-link  d-flex align-items-center">
                        <IoPersonSharp className="me-2" />
                        Student Details
                    </NavLink>
                </li> */}
            </ul>
            <Outlet />
        </MainLayout>
    )
}
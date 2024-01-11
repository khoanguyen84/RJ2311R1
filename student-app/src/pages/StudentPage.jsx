import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { FaUserGear } from "react-icons/fa6";
import { FaUserPlus, FaUsers } from "react-icons/fa";

export default function StudentPage() {
    const location = useLocation()
    const { studentId } = useParams()
    const pathname = location.pathname.split('/').pop()
    const isActive = pathname === 'student' || pathname === 'list'
    return (
        <MainLayout>
            <ul className="nav nav-tabs mb-2">
                <li className="nav-item">
                    <NavLink to={'/student/list'} className={`nav-link d-flex align-items-center ${isActive ? 'active' : ''}`}>
                        <FaUsers className="me-2" />
                        Student List
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'/student/add'} className="nav-link  d-flex align-items-center">
                        <FaUserPlus className="me-2" />
                        Create Student
                    </NavLink>
                </li>
                {
                    studentId && (
                        <li className="nav-item">
                            <NavLink to={`${studentId}`} className="nav-link  d-flex align-items-center">
                                <FaUserGear className="me-2" />
                                Student Details
                            </NavLink>
                        </li>
                    )
                }
            </ul>
            <Outlet />
        </MainLayout>
    )
}
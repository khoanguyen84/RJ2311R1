import { useEffect, useState } from "react"
import dayjs from "dayjs"
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { FaUserTimes, FaUserCog, FaSearch } from "react-icons/fa";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ModifyStudentModal from "./ModifyStudentModal";
import Spinner from "../spinner/Spinner";

export default function StudentList() {
    const [studentList, setStudentList] = useState([])
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [selectedStudent, setSelectedStudent] = useState(null)
    const [studentId, setStudentId] = useState(null)
    useEffect(() => {
        // function getStudentList() {
        //     fetch('https://6596b23a6bb4ec36ca0329d0.mockapi.io/student', {
        //         method: 'GET'
        //     })
        //         .then((res) => res.json())
        //         .then((data) => {
        //             setStudentList(data)
        //         })
        // }
        setLoading(true)
        async function getStudentList() {
            let studentListRes = await fetch(`${import.meta.env.VITE_API_URI}/student`)
            let data = await studentListRes.json()
            setStudentList(data)
            setLoading(false)
        }
        getStudentList()
    }, [selectedStudent, studentId])

    const handleRemoveStudent = (student) => {
        Swal.fire({
            title: "Are you sure to remove this student?",
            text: "You won't be able to revert this!",
            // icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                let removeStudentRes = await fetch(`https://6596b23a6bb4ec36ca0329d0.mockapi.io/student/${student.id}`, {
                    method: "DELETE"
                })
                let removedStudent = await removeStudentRes.json()
                if (removedStudent) {
                    toast.success('Student removed succeed')
                    setSelectedStudent(removedStudent)
                }
            }
        })
    }
    const handleModifyStudent = (student) => {
        setShow(true)
        setStudentId(student?.id)
    }
    return (
        <>
            <div className="d-flex align-items-center justify-content-between my-2">
                <form className="d-flex align-items-center w-50">
                    <input type="text"
                        className="form-control form-control-sm"
                        placeholder="search..."
                    />
                    <FaSearch size={20} className="text-secondary" style={{ marginLeft: '-23px' }} />
                </form>
                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center me-2">
                        <span className="me-2">Field</span>
                        <select className="form-select form-select-sm">
                            <option value="fullname">Fullname</option>
                            <option value="email">Email</option>
                        </select>
                    </div>
                    <div className="d-flex align-items-center">
                        <span className="me-2">Sort</span>
                        <select className="form-select form-select-sm">
                            <option value="asc">Ascendent</option>
                            <option value="desc">Descendent</option>
                        </select>
                    </div>
                </div>
            </div>
            {
                loading ? <Spinner /> : (
                    <table className="table table-bordered table-striped table-hover rounded-3 overflow-hidden">
                        <thead className="table-secondary">
                            <tr>
                                <th className="text-center">#ID</th>
                                <th className="text-center">Fullname</th>
                                <th className="text-center">Date of birth</th>
                                <th className="text-center">Email</th>
                                <th className="text-center">Mobile</th>
                                <th className="text-center">Department</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                studentList?.map((student, index) => (
                                    <tr key={student.id}>

                                        <td className="align-middle">{student.id}</td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img className="avatar-sm me-2" src={student.avatarUrl} alt="" />
                                                <div className="d-flex flex-column">
                                                    <Link to={`/student/${student.id}`}>
                                                        {student.fullname}
                                                    </Link>
                                                    {Boolean(student.gender) ? <BsGenderMale className="text-primary" /> : <BsGenderFemale className="text-warning" />}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-end align-middle">{dayjs(student.dob).format('MMM DD YYYY')}</td>
                                        <td className="text-end align-middle">{student.email}</td>
                                        <td className="text-end align-middle">{student.mobile}</td>
                                        <td className="text-end align-middle">{student.department.name}</td>
                                        <td>
                                            <div className="d-flex flex-column justify-content-center align-items-center">
                                                <FaUserTimes role="button" size={20} className="text-danger" title="Remove student"
                                                    onClick={() => handleRemoveStudent(student)}
                                                />
                                                <FaUserCog role="button" size={20} className="text-primary" title="Modify student"
                                                    onClick={() => handleModifyStudent(student)}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                )
            }
            <div className="d-flex align-items-center justify-content-between">
                <ul className="pagination">
                    <li className="page-item">
                        <button className="page-link">Previous</button>
                    </li>
                    <li className="page-item">
                        <button className="page-link">Next</button>
                    </li>
                </ul>
                <div className="d-flex align-items-center">
                    <span style={{width: '150px'}}>Items per page</span>
                    <select className="form-select form-select-sm" style={{width: '60px'}}>
                        <option value={10}>10</option>
                        <option value={30}>30</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                </div>
            </div>
            <ModifyStudentModal show={show} handleClose={setShow} studentId={studentId} setStudentId={setStudentId} />
        </>
    )
}

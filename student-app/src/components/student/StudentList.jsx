import { useEffect, useState } from "react"
import dayjs from "dayjs"
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { FaUserTimes, FaUserCog } from "react-icons/fa";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ModifyStudentModal from "./ModifyStudentModal";

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
            let studentListRes = await fetch('https://6596b23a6bb4ec36ca0329d0.mockapi.io/student')
            let data = await studentListRes.json()
            setStudentList(data)
            setLoading(false)
        }
        getStudentList()
    }, [selectedStudent])

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
            {
                loading ? <p>Loading ... </p> : (
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
            <ModifyStudentModal show={show} handleClose={setShow} studentId={studentId} />
        </>
    )
}

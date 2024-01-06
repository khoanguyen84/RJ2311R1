import { useEffect, useState } from "react"
import dayjs from "dayjs"
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";

export default function StudentList() {
    const [studentList, setStudentList] = useState([])
    const [loading, setLoading] = useState(false)
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
    }, [])
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
                                                    <span>{student.fullname}</span>
                                                    {Boolean(student.gender) ? <BsGenderMale className="text-primary" /> : <BsGenderFemale className="text-warning" />}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-end align-middle">{dayjs(student.dob).format('MMM DD YYYY')}</td>
                                        <td className="text-end align-middle">{student.email}</td>
                                        <td className="text-end align-middle">{student.mobile}</td>
                                        <td className="text-end align-middle">{student.department.name}</td>
                                        <td></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                )
            }
        </>
    )
}

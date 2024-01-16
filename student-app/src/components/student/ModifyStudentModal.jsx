import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import { FaSave, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

const schema = yup.object({
    fullname: yup.string().required(),
    dob: yup.date().required().typeError('dob is a required field'),
    mobile: yup.string().required(),
    gender: yup.bool().required(),
    email: yup.string().email().required(),
    department: yup.string().required(),
    avatarUrl: yup.string().url().required()
})

export default function ModifyStudentModal({ show, handleClose, studentId, setStudentId }) {
    const [currentStudent, setCurrentStudent] = useState({})
    const [departmentList, setDepartmentList] = useState([])
    const [loading, setLoading] = useState(false)
    const [newAvatarUrl, setNewAvatarUrl] = useState(null)

    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        setLoading(true)
        async function getStudentById() {
            let studentRes = await fetch(`https://6596b23a6bb4ec36ca0329d0.mockapi.io/student/${studentId}`, { method: "GET" })
            let data = await studentRes.json()
            setValue('fullname', data?.fullname)
            setValue('mobile', data?.mobile)
            setValue('dob', dayjs(data?.dob).format('YYYY-MM-DD')) //YYYY-MM-DD
            setValue('email', data?.email)
            setValue('department', JSON.stringify(data?.department))
            setValue('avatarUrl', data?.avatarUrl)
            setValue('gender', Boolean(data?.gender))
            setCurrentStudent(data)
            setLoading(false)
        }
        getStudentById()
    }, [studentId])

    useEffect(() => {
        async function getDepartmentList() {
            let departmentListRes = await fetch('https://6596b23a6bb4ec36ca0329d0.mockapi.io/department')
            let data = await departmentListRes.json()
            setDepartmentList(data)
        }
        getDepartmentList()
    }, [])

    const handleCloseModel = () => {
        handleClose(false)
        setNewAvatarUrl(null)
    }

    const handleModifyStudent = async (values) => {
        console.log(values);
        values = {
            ...values,
            department: JSON.parse(values.department)
        }
        try {
            let modifyStudentRes = await fetch(`https://6596b23a6bb4ec36ca0329d0.mockapi.io/student/${studentId}`, {
                method: "PUT",
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(values)
            })
            let result = await modifyStudentRes.json(); // {} Object.keys(result).length   [] result.length
            if(Object.keys(result).length){
                toast.success('Student updated succeed')
                handleClose(false)
                setNewAvatarUrl(null)
                setStudentId(null)
            }

        } catch (error) {
            toast.error('Can not update student, please try again!')
        }
    }
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            size="xl"
        >
            <Modal.Header closeButton>
                <Modal.Title>Modify {currentStudent?.fullname}'s info</Modal.Title>
            </Modal.Header>
            <form onSubmit={handleSubmit(handleModifyStudent)}>
                <Modal.Body>
                    {
                        loading ? <p>Loading...</p> : (
                            <div className="row">
                                <div className="col-md-5 col-lg-5 col-sm-12">
                                    <div className="form-group mb-2">
                                        <label className="form-label">Fullname</label>
                                        <input
                                            type="text"
                                            className={`${errors.fullname?.message ? 'is-invalid' : ''} form-control`}
                                            placeholder="Fullname..."
                                            {...register('fullname')}
                                        />
                                        <span className="invalid-feedback">{errors.fullname?.message}</span>
                                    </div>
                                    <div className="form-group mb-2">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label className="form-label">Date of birth</label>
                                                <input
                                                    type="date"
                                                    className={`${errors.dob?.message ? 'is-invalid' : ''} form-control`}
                                                    {...register('dob')}
                                                />
                                                <span className="invalid-feedback">{errors.dob?.message}</span>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Gender</label>
                                                <div>
                                                    {
                                                        Boolean(currentStudent?.gender) ? (
                                                            <>
                                                                <div className="form-check form-check-inline">
                                                                    <input
                                                                        type="radio"
                                                                        className={`${errors.gender?.message ? 'is-invalid' : ''} form-check-input`}
                                                                        value={true}
                                                                        {...register('gender')}
                                                                        checked
                                                                    />
                                                                    <label className="form-check-label">Male</label>
                                                                </div>
                                                                <div className="form-check form-check-inline">
                                                                    <input
                                                                        type="radio"
                                                                        className={`${errors.gender?.message ? 'is-invalid' : ''} form-check-input`}
                                                                        value={false}
                                                                        {...register('gender')}
                                                                    />
                                                                    <label className="form-check-label">Female</label>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <div className="form-check form-check-inline">
                                                                    <input
                                                                        type="radio"
                                                                        className={`${errors.gender?.message ? 'is-invalid' : ''} form-check-input`}
                                                                        value={true}
                                                                        {...register('gender')}
                                                                    />
                                                                    <label className="form-check-label">Male</label>
                                                                </div>
                                                                <div className="form-check form-check-inline">
                                                                    <input
                                                                        type="radio"
                                                                        className={`${errors.gender?.message ? 'is-invalid' : ''} form-check-input`}
                                                                        value={false}
                                                                        {...register('gender')}
                                                                        checked
                                                                    />
                                                                    <label className="form-check-label">Female</label>
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mb-2">
                                        <label className="form-label">Mobile</label>
                                        <input
                                            type="tel"
                                            className={`${errors.mobile?.message ? 'is-invalid' : ''} form-control`}
                                            placeholder="Fullname..."
                                            {...register('mobile')}
                                        />
                                        <span className="invalid-feedback">{errors.mobile?.message}</span>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-4 col-sm-12">
                                    <div className="form-group mb-2">
                                        <label className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className={`${errors.email?.message ? 'is-invalid' : ''} form-control`}
                                            placeholder="Email..."
                                            {...register('email')}
                                        />
                                        <span className="invalid-feedback">{errors.email?.message}</span>
                                    </div>
                                    <div className="form-group mb-2">
                                        <label className="form-label">Department</label>
                                        <select
                                            className='form-select'
                                            defaultValue={''}
                                            {...register('department')}
                                        >
                                            {
                                                departmentList?.map((depart) => (
                                                    <option value={JSON.stringify(depart)} key={depart.id}>{depart.name}</option>
                                                ))
                                            }
                                        </select>
                                        <span className="invalid-feedback">{errors.department?.message}</span>
                                    </div>
                                    <div className="form-group mb-2">
                                        <label className="form-label">Avatar URL</label>
                                        <input
                                            type="url"
                                            className={`${errors.avatarUrl?.message ? 'is-invalid' : ''} form-control`}
                                            placeholder="Avatar URL..."
                                            {...register('avatarUrl')}
                                            onChange={(e) => setNewAvatarUrl(e.target.value)}
                                        />
                                        <span className="invalid-feedback">{errors.avatarUrl?.message}</span>
                                    </div>
                                </div>
                                <div className="col-md-3 col-lg-3 col-sm-12">
                                    <img className="w-100 rounded" src={newAvatarUrl || currentStudent?.avatarUrl} alt="" />
                                </div>
                            </div>
                        )
                    }
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-dark d-flex align-items-center" onClick={handleCloseModel}>
                        <FaTimes className="me-2" />
                        Close
                    </button>
                    <button type="submit" className="btn btn-primary d-flex align-items-center">
                        <FaSave className="me-2" />
                        Save
                    </button>
                </Modal.Footer>
            </form>
        </Modal>
    )
}
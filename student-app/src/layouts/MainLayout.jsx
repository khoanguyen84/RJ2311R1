import { useEffect } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

export default function MainLayout({ children }) {
    console.log(document.cookie);
    const navigate = useNavigate()
    const getToken = () => {
        let cookieArr = document.cookie.split(';').map((item => item.split('=')))
        let cookieObj = cookieArr.reduce((obj, [key, value]) => {
            obj = {
                ...obj,
                [key.trim()]: value
            }
            return obj
        }, {})
        return cookieObj
    }
    let cookies = getToken()
    useEffect(() => {
        if(!cookies || !cookies?.student_app_token) {
            navigate('/not-permission')
        }
    }, [cookies])
    return (
        <>
            <Header />
            <div className="container d-flex">
                <Sidebar />
                <main className="flex-grow-1">
                    {children}
                </main>
            </div>
            <Footer />
        </>
    )
}
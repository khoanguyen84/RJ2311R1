import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

export default function MainLayout({ children }) {
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
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

export default function MainLayout({ children }) {
    return (
        <div className="container">
            <Header />
            <div className="d-flex">
                <Sidebar />
                <main className="flex-grow-1 bg-warning">
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    )
}
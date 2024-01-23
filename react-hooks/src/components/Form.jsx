import { useContext } from "react"
import { ThemeContext } from "../App"

export default function Form() {
    const { theme, handleChangeTheme } = useContext(ThemeContext)
    return (
        <>
            <button className={`btn btn-sm ${theme === 'light' ? 'btn-dark' : 'btn-secondary'}`}
                onClick={handleChangeTheme}
            >Dark Mode</button>
            <form className={`p-3 border ${theme}`}>
                <div className="form-group mb-2">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="form-group mb-2">
                    <label className="form-label"></label>
                    <button className="btn btn-secondary">Login</button>
                </div>
            </form>
        </>

    )
}
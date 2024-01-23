import Form from './Form';
export default function Panel(props) {
    const { theme, handleChangeTheme } = props
    return (
        <div className={`p-4 border ${theme}`}>
            <Form theme={theme} handleChangeTheme={handleChangeTheme} />
        </div>
    )
}
import { useState } from 'react'
import './App.css'
import Panel from './components/Panel'

function App() {
  const [theme, setTheme] = useState('light')
  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <>
      <div className={`container w-50 p-3 border ${theme}`}>
        {/* <button className={`btn btn-sm ${theme === 'light' ? 'btn-dark' : 'btn-secondary'}`}
          onClick={handleChangeTheme}
        >Dark Mode</button> */}
        <Panel theme={theme} handleChangeTheme={handleChangeTheme} />
      </div>
    </>
  )
}

export default App

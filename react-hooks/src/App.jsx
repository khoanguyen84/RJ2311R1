import { createContext, useContext, useState } from 'react'
import './App.css'
import Panel from './components/Panel'

// Context API
// 1. Tạo context
// 2. Provider (cung cấp data)
// 3. Consumer (nơi sử data)

export const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('light')
  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <ThemeContext.Provider value={{theme, handleChangeTheme}}>
      <div className={`container w-50 p-3 border ${theme}`}>
        <Panel/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App

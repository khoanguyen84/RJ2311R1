import { useContext } from 'react'
import './App.css'
import Panel from './components/Panel'
import { ThemeContext } from './context/ThemeContext'

// Context API
// 1. Tạo context
// 2. Provider (cung cấp data)
// 3. Consumer (nơi sử data)
function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <>
      <div className={`container w-50 p-3 border ${theme}`}>
        <Panel/>
      </div>
    </>
  )
}

export default App

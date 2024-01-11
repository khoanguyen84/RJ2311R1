
import { Route, Routes } from 'react-router-dom'
import './App.css'
import DepartmentPage from './pages/DepartmentPage'
import StudentPage from './pages/StudentPage'
import StudentList from './components/student/StudentList'
import CreateStudent from './components/student/CreateStudent'
import StudentDetail from './components/student/StudentDetail'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<DepartmentPage />} />
        <Route path='/dashboard' element={<DepartmentPage />} />
        <Route path='/student' element={<StudentPage />} >
          <Route index element={<StudentList />} />
          <Route path='list' element={<StudentList />} />
          <Route path='add' element={<CreateStudent />} />
          <Route path=':studentId' element={<StudentDetail />} />
        </Route>

      </Routes>
    </>
  )
}

export default App

// nested router
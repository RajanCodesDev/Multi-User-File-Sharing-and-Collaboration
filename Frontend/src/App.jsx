import { Route, Routes } from 'react-router-dom'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'
import './App.css'

function App() {
    return (
      <Routes>
         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
      </Routes>
    )
}

export default App
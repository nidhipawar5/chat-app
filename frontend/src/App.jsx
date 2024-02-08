import {Route, Routes} from 'react-router-dom'
import './App.css'
import toast, { Toaster } from 'react-hot-toast';
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'

function App() {
  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/login" element= {<Login />} />
          <Route path="/signup" element= {<SignUp />} />
        </Routes>
        <Toaster/>
      </div>
    </>
  )
}

export default App

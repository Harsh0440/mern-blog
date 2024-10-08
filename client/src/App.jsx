import { BrowserRouter,Routes,Route} from 'react-router-dom'
import React from 'react'
import About from './pages/About'
import Home from './pages/Home'
import SingUp from './pages/SingUp'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Projects from './pages/projects'

export default function App() {
  return ( <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SingUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

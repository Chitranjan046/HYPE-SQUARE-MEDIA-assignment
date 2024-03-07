import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';


export default function App() {
  return (
    <BrowserRouter>
    
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/log-in' element={<LogIn />} />
        <Route path='/sign-up' element={<SignUp />} />
    </Routes>
    
    
    </BrowserRouter>
  )
}

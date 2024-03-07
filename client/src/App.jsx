import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';


export default function App() {
  return (
    <BrowserRouter>
       <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/log-in' element={<LogIn />} />
        <Route path='/sign-up' element={<SignUp />} />
    </Routes>

    
    <Footer />
    
    </BrowserRouter>
  )
}

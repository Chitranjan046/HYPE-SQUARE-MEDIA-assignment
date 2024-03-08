import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Research from "./pages/Research";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/research' element={<Research/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/projects' element={<Projects/>} />


    </Routes>
    
    <Footer />
    </BrowserRouter>
  )
}

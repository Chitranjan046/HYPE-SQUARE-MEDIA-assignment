import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Dashboard from './pages/dashboard/Dashboard';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Research from "./pages/Research";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Footer from './components/Footer';
import PrivateRoute from "./components/private/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/private/OnlyAdminPrivateRoute";
import CreatePost from "./pages/admin/CreatePost";
import UpdatePost from "./pages/admin/UpdatePost";
import PostPage from "./pages/posts/PostPage";
import ScrollToTop from "./components/ScrollToTop";
import Search from './pages/Search';

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/search' element={<Search />} />

        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />} >
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>




        <Route path='/research' element={<Research/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/post/:postSlug' element={<PostPage />} />


    </Routes>
    
    <Footer />
    </BrowserRouter>
  )
};
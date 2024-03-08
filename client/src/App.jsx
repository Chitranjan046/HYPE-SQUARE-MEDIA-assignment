import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';

import SignIn from './pages/SignIn';
import OnlyAdminPrivateRoute from "./components/private/OnlyAdminPrivateRoute";
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from "./components/admin/PrivateRoute";
import CreatePost from "./pages/admin/CreatePost";
import UpdatePost from "./pages/admin/UpdatePost";
import PostPage from "./pages/posts/PostPage";


export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />

       <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />} >
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>
       


        <Route path='/post/:postSlug' element={<PostPage />} />

    </Routes>
    
    <Footer />
    </BrowserRouter>
  )
};
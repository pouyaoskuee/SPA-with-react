import './App.css'
import Header from './components/Header'
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Posts from "./pages/Posts.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Layouts from "./components/Layouts.jsx";
import Profile from "./pages/Profile.jsx";
import Payments from "./pages/Payments.jsx";
import Post from "./pages/Post.jsx";
import Login from "./pages/Login.jsx";

function App() {

  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Layouts/>}>
                <Route index path={''} element={<Home/>} />
                <Route path={'posts'} element={<Posts />}/>
                <Route path={'posts/:id'} element={<Post/>}/>
                <Route path={'dashboard'} element={<Dashboard />}>
                    <Route index path={''} element={<Navigate to={'profile'}/>} />
                    <Route path={'Profile'} element={<Profile/>} />
                    <Route path={'Payments'} element={<Payments/>} />
                </Route>
                <Route path={'Login'} element={<Login/>} />
            </Route>
        </Routes>
    </div>
  )
}

export default App

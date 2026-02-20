import './App.css'
import Header from './components/Header'
import {Route , Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Posts from "./pages/Posts.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {

  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route path={'/posts'} element={<Posts />} />
            <Route path={'/dashboard'} element={<Dashboard />} />
        </Routes>

    </div>
  )
}

export default App

import React from 'react';
import {Navigate, useNavigate} from "react-router-dom";

const Login = () => {
    const navigate= useNavigate();
    const [isAuth , setIsAuth] = React.useState(false);


    function handleClick (e){
        e.preventDefault();
        navigate('/dashboard',{replace:true});
    }
    return (
        <div className="login">
            <p>please log in.</p>
            {isAuth && <Navigate to="/dashboard"></Navigate>}
            <button onClick={handleClick} >log in</button>
            <button onClick={()=>setIsAuth(true)} >log in whit navigate component</button>

        </div>
    );
};

export default Login;
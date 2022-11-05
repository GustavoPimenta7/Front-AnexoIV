import { Navigate, Outlet } from "react-router-dom";

export function userAuth(){
    const user = sessionStorage.getItem('Login');
    return user && user;
}

function ProtectRouter(){
    const isAuth = userAuth();
    return(
        isAuth ? <Outlet/> : <Navigate to='/'/>
    )
}

export default ProtectRouter;
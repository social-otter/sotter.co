import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../auth";


export default function RequireAuth({children}: {children: JSX.Element}){
    const location = useLocation();
    
    auth.onAuthStateChanged((user) => {
        if (!user) {
            return <Navigate to={'/'} state={{from: location}} replace />;
        }
    })
    
    return children;
}

import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../auth";


export default function RequireAuth({children}: {children: JSX.Element}){
    const location = useLocation();
    const navigate = useNavigate();
    
    auth.onAuthStateChanged((user) => {
        console.log('RequireAuth', user);

        if (!user) {
            // return <Navigate to={'/'} state={{from: location}} replace />;
            navigate('/')
        }
    })
    return children;
}

import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>; // You can replace this with a loading spinner or skeleton
    }

    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
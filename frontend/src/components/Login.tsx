import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithPassword({ email, password});
        if (error) {
            alert(error.message)
        }else {
            navigate('/');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
            <p>Don't have an account? <a href="/register">Sign up</a></p>
            <p>Forgot your password? <a href="/forgot-password">Reset it</a></p>
        </div>
    )
}
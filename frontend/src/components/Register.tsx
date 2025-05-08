import { useState } from "react";
import { supabase } from "../lib/supabaseClient";


export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) alert(error.message);
        else alert('Check your email for a confirmation link');
    };

    return (
        <div>
            <h2>Register</h2>
            <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            <button onClick={handleRegister}>Register</button>
            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    );
}
import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirectToHome, setRedirectToHome] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const user = await UserService.login({
                email: email,
                password: password,
            });
            setRedirectToHome(true);
        } catch (error) {
            setError(true);
        }
    }

    return (
        <div>
            <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder='Endereço de E-mail'
            />
        </div>
    )
}

export default Login
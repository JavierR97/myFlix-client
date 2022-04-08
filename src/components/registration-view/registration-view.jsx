import React, { useState } from 'react';


export function RegistrationView(props) {
    const [ username, setUsername] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onRegister(username)
    }
    return (
        <form action="">
            <label htmlFor="">
                Username:
                <input type="text" value={ username } onChange={ e => setUsername(e.target.value) }/>
            </label>
            <label htmlFor="">
                Password: 
                <input type="password" value={ password } onChange={ e => setPassword(e.target.value) } />
            </label>
            <label htmlFor="">
                Email:
                <input type="email" value={ email } onChange={ e => setEmail(e.target.value) }/>
            </label>
            <button type="submit" onClick={handleSubmit}>Register</button>
        </form>
    );
};

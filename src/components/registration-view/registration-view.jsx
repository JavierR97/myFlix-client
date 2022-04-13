import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from '';

export function RegistrationView(props) {
    const [ username, setUsername] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onRegister(username)
    }
    return (
        <Form>
            <Form.Group>
                <Form.Label>Username:</Form.Label>
                <Form.Control placeholder="Username..." type="text" value={ username } onChange={ e => setUsername(e.target.value) }/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control placeholder="Password..." type="password" value={ password } onChange={ e => setPassword(e.target.value) }/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" value={ email } onChange={ e => setEmail(e.target.value) } required/>
            </Form.Group>
            <Button type="submit" onClick={handleSubmit}>Register</Button>
        </Form>
    );
};

RegistrationView.propTypes = {
    username: PropTypes.string,
    passwordP: PropTypes.string,
    email: PropTypes.string,
    onRegister: PropTypes.func 
}; 

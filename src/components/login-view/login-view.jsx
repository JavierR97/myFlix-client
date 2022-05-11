import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './login-view.scss';


export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');


// makes post request to login endpoint 
  const handleSubmit = (e) => {
    e.preventDefault();
    /* Send a request to the server for authentication */
    axios.post('https://myfilmapi.herokuapp.com/login', {
      Username: username,
      Password: password
    })
    .then(response => {
      const data = response.data;
      props.onLoggedIn(data);
      console.log(token);
    })
    .catch(e => {
      console.log('no such user')
    });
  };

  return (
    <Form>
        <Form.Group controlId="formUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control type="text" onChange={ e => setUsername(e.target.value) }/> 
        </Form.Group>

        <Form.Group controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" onChange={ e => setPassword(e.target.value) }/>
        </Form.Group>

        <Button size="lg" variant="info" type="submit" onClick={ handleSubmit }>Submit</Button>
    </Form>
  );  
} 

LoginView.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    onLoggedIn: PropTypes.func
}; 

//'https://myfilmapi.herokuapp.com/movies'

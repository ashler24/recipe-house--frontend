import React from 'react';
import { Form, FormGroup, Input, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import { FaRegUserCircle } from 'react-icons/fa';
import './login.css';


const Login = () => {

    return (
        <>
            <div className="login-form-wrapper">
                <h3>Sign In</h3>
                <br />
                <div className="login-with-other-wrapper">

                </div>
                <Form className="container-sm login-form">
                    <FormGroup>
                        <Label>Username</Label>
                        <InputGroup>
                            <InputGroupAddon><FaRegUserCircle /></InputGroupAddon>
                            <Input type="text" id="username" name="username" placeholder="Username" />
                        </InputGroup>
                    </FormGroup>
                    {/* <FormGroup>
                        <Label>Email</Label>
                        <InputGroup>
                            <InputGroupAddon><FaRegUserCircle /></InputGroupAddon>
                            <Input type="email" id="email" name="email" placeholder="Email" />
                        </InputGroup>
                    </FormGroup> */}
                    <FormGroup>
                        <Label>Password</Label>
                        <InputGroup>
                            <InputGroupAddon><FaRegUserCircle /></InputGroupAddon>
                            <Input type="password" id="password" name="password" placeholder="password" />
                        </InputGroup>
                    </FormGroup>

                </Form>
            </div>
        </>
    );

}


export default Login;
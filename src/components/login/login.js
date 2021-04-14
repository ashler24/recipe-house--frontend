import React, { useState } from 'react';
import { Form, FormGroup, Input, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import { FaRegUserCircle } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import './login.css';
import { useForm } from 'react-hook-form';
import api from 'api';
import Loader from 'react-loader-spinner';


const Login = () => {

    const [toggleLoader, setToggleLoader] = useState(false);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        setToggleLoader(true);
        console.log(data);
        api.post('/auth/login', data)
            .then(response => {
                console.log(response.data.status)
                console.log(response.data)
                setToggleLoader(false);
            })
            .catch(error => {
                console.log(error)
                setToggleLoader(false);
            })
    }

    return (
        <>
            <div className="login-form-wrapper">
                <h3>Sign In</h3>
                <br />
                <div className="login-with-other-wrapper">

                </div>
                <Form className="login-form container-sm" onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup>
                        <Label>Email</Label>
                        <InputGroup>
                            <InputGroupAddon><FaRegUserCircle /></InputGroupAddon>
                            <Input type="email" {...register('email', { required: true })} placeholder="username" />
                        </InputGroup>
                        {errors.username && 'Email is required...'}
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <InputGroup>
                            <InputGroupAddon><RiLockPasswordLine /></InputGroupAddon>
                            <Input type="password" {...register('password', { required: true })} placeholder="password" />
                        </InputGroup>
                        {errors.password && 'Password is required...'}
                    </FormGroup>
                    <button type="submit" className="btn btn-md btn-block login-button" style={{ "display": "inline-block" }}>Sign In{toggleLoader ?
                        (<span>
                            <Loader
                                type="TailSpin"
                                color="#ffffff"
                                height={15}
                                width={15}
                            />
                        </span>) : null}
                    </button>
                </Form>
            </div>
        </>
    );

}


export default Login;
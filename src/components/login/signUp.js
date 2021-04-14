import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Input, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import { FaRegUserCircle } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import './signUp.css';
import api from 'api';
import Loader from 'react-loader-spinner';


const SignUp = () => {

    const history = useHistory();

    const [toggleLoader, setToggleLoader] = useState(false);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        setToggleLoader(true);
        console.log(data);
        api.post('/auth/signup', data)
            .then(response => {
                console.log(response.data.status)
                console.log(response.data)
                setToggleLoader(false);
                if(response.data.status === 'success') history.push('/login');
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <div className="login-form-wrapper">
                <h3>Sign Up</h3>
                <br />
                <div className="login-with-other-wrapper">

                </div>
                <Form className="login-form container-sm" onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup>
                        <Label>Username</Label>
                        <InputGroup>
                            <InputGroupAddon><FaRegUserCircle /></InputGroupAddon>
                            <Input type="text" {...register("username", { required: true })} placeholder="Enter username..." defaultValue="" />
                        </InputGroup>
                        {errors.username && "Username is required"}
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <InputGroup>
                            <InputGroupAddon><HiOutlineMail /></InputGroupAddon>
                            <Input {...register("email", { required: true })} type="email" placeholder="Enter email..." defaultValue="" />
                        </InputGroup>
                        {errors.email && "Email is required"}
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <InputGroup>
                            <InputGroupAddon><RiLockPasswordLine /></InputGroupAddon>
                            <Input {...register("password", { required: true })} type="password" placeholder="password" defaultValue="" />
                        </InputGroup>
                        {errors.password && "Password is required"}
                    </FormGroup>
                    <button type="submit" className="btn btn-md btn-block login-button" style={{"display":"inline-block"}}>Sign Up{toggleLoader ?
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


export default SignUp;
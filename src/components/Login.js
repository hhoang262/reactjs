import React from 'react';
import { Form, Button } from 'react-bootstrap';
import "./Login.css";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }
    setEmail = (input_email) => {
        this.setState({
            email: input_email
        });
    }

    setPassword = (input_password) => {
        this.setState({
            password: input_password
        })
    }

    validateForm = () => {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="Login">
                <form>
                    <Form.Group controlId="email" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={e => this.setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="password" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            value={this.state.password}
                            onChange={e => this.setPassword(e.target.value)}
                            type="password"
                        />
                    </Form.Group>
                    <Button block disabled={!this.validateForm()} type="submit">
                        Login
            </Button>
                </form>
            </div>
        );
    }
}
export default Login;
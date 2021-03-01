import React,{useState} from 'react'
import { Form } from '../components';
import FooterContainer  from '../containers/footer'
import { HeaderContainer } from '../containers/header'

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');
    return (
      <>
        <HeaderContainer />
        <Form>
            <Form.Title>Sign In</Form.Title>
            
        </Form>
        <FooterContainer />
      </>
    )
}


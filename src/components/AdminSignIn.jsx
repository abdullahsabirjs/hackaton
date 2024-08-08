import { useState } from 'react';
import {  AdminSignInContainer, 
  FormContainer,
  InputField,
  SubmitButton
} from '../styles/AdminSignInStyles';
import { useNavigate } from 'react-router-dom';

const AdminSignIn = () => {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    console.log ('Admin Sign in', {email, password});
    navigate('/admin/dashboard');
  };

  return (
    <AdminSignInContainer>
      <h2>Admin Sign in</h2>
      <FormContainer>
         <InputField
         type = 'email'
         placeholder='Email'
         value={email}
         onChange={ (e) => setEmail(e.target.value)}
         required 
         />

        <InputField
         type = 'password'
         placeholder='Password'
         value={password}
         onChange={ (e) => setPassword(e.target.value)}
         required 
         />
         <SubmitButton  as="a" onClick={handleSignIn} > Sign  In </SubmitButton>
        </FormContainer>
      </AdminSignInContainer>
  )
}
export default AdminSignIn ;
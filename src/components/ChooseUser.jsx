// ChooseUser.jsx
import React from 'react';
import { ChooseUserContainer, UserSection, Title, Button, Logo } from '../styles/ChooseUserStyles'; // Import styles
import { Link } from 'react-router-dom';

const ChooseUser = () => {
  return (
    <ChooseUserContainer>
      <Link to="/">
        <Logo src="src/assets/logo.png" alt="Logo" />
      </Link>
      <UserSection>
        <Title>Admin</Title>
        <Button to="/admin-signIn">Login as Admin</Button>
      </UserSection>
      <UserSection>
        <Title>Student</Title>
        <Button to="/student-signIn">Login as Student</Button>
      </UserSection>
      <UserSection>
        <Title>Teacher</Title>
        <Button to="/teacher-signIn">Login as Teacher</Button>
      </UserSection>
    </ChooseUserContainer>
  );
};

export default ChooseUser;

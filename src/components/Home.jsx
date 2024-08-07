import React from 'react';
import { Navbar, Logo, ButtonsContainer, LoginButton, HomeContainer, SchoolInfo, Title, AdminRegisterLink } 
from '../styles/styles';
import bg1 from "../assets/logo.png";
import { useNavigate } from 'react-router-dom'; 


const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/choose-user');
  };

  return (
    <>
      <Navbar>
        <Logo src={bg1} alt="Logo" />
        <ButtonsContainer>
          <LoginButton onClick={handleLoginClick}>Sign In</LoginButton>
          <AdminRegisterLink to="/admin-signIn">Admin Register</AdminRegisterLink>
        </ButtonsContainer>
      </Navbar>
      <HomeContainer>
        <SchoolInfo>
          <Title> SMIT <br /> Assignment Submission Portal</Title>
          
        </SchoolInfo>
      </HomeContainer>
    </>
  );
};

export default Home;

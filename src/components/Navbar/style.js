import styled from "styled-components";

export const NavWrapper = styled.div`
  background-color: #40916c;
  font-family: "Poppins", sans-serif;
  form {
    background-color: white;
    margin-left: 40px;
    height: 40px;
    padding: 0 20px;
    border-radius: 100px;
    input {
      font-size: 15px;
      border: none;
      background: transparent;
      margin: 0 0 0 5px;
    }
    input:focus {
      box-shadow: none;
    }
  }
  .nav-link {
    color: #000;
    margin-left: 20px;
  }
  .navbar-light .navbar-nav .nav-link {
    color: #000;
    margin-left: 20px;
  }
  .navbar-light .navbar-nav .nav-link:hover {
    color: #003554;
    border-top: 4px solid #003554;
  }
  .img {
    height: 70px;
  }
  .nav-item .login {
    background-color: black;
  }
  .navbar-light .navbar-nav .login {
    color: #000 !important;
    text-decoration: none;
  }
  
  .dropdown-toggle:after { content: none }
  .dropdown-item.active, .dropdown-item:active {
    background-color: #fff;
    color: #000;
  }
  .dropdown-item.active, .dropdown-item:hover{
    color:#028090;
  }
`;

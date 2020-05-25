import styled from "styled-components";

export const NavWrapper = styled.div`
  background-color: #1976d2;
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
    color: #fff;
    margin-left: 20px;
  }
  .navbar-light .navbar-nav .nav-link {
    color: #fff;
    margin-left: 20px;
  }
  .navbar-light .navbar-nav .nav-link:hover {
    font-weight: 500
  }
  .img {
    height: 32px;
  }
  .nav-item .login {
    background-color: black;
  }
  .dropdown-toggle:after { content: none }
  .dropdown-item.active, .dropdown-item:active {
    background-color: #fff;
    color: #000;
  }
  .dropdown-item.active, .dropdown-item:hover{
    color:#1976d2;
  }
`;

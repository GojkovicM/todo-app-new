import React, { useContext } from "react";
import { StyledLoginPage } from "./loginpage.styled";
import Footer from "../../components/Footer/Footer";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { ToDoContext } from "../../store/todo";

function LoginPage() {
  const { toggleForm } = useContext(ToDoContext);

  if (!toggleForm) {
    return (
      <StyledLoginPage>
        <LoginForm />

        <Footer />
      </StyledLoginPage>
    );
  } else {
    return (
      <StyledLoginPage>
        <SignUpForm />

        <Footer />
      </StyledLoginPage>
    );
  }
}

export default LoginPage;

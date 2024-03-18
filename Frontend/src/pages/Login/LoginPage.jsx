import React, { useContext, useEffect, useState } from "react";
import { StyledLoginPage } from "./loginpage.styled";
import Footer from "../../components/Footer/Footer";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { ToDoContext } from "../../store/todo";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

function LoginPage() {
  const { toggleForm } = useContext(ToDoContext);

  const [value, setValue] = useState(new Date());

  useEffect(() => {
    setInterval(() => setValue(new Date()), 1000);
  }, []);

  if (!toggleForm) {
    return (
      <StyledLoginPage>
        <LoginForm />
        <Clock value={value} size={250}/>
        <Footer />
      </StyledLoginPage>
    );
  } else {
    return (
      <StyledLoginPage>
        <SignUpForm />
        <Clock  value={value} size={250} />
        <Footer />
      </StyledLoginPage>
    );
  }
}

export default LoginPage;

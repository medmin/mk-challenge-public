import React from "react";
import { HomePageWrapper } from "./index-styles";
import { MessageForm } from "./message-form";
import { LoginForm } from "./login-form";

function Homepage(props) {
  return (
    <HomePageWrapper>
      <MessageForm />
      <LoginForm />
    </HomePageWrapper>
  );
}

export default Homepage;

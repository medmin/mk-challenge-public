import React from "react";
import { Flex, SvgWrapper } from "src/widgets/styled-parts";
import styled from "styled-components";
import GithubSvg from "img/github.svg";

const handleOnClick = () => {
  window.location.href =
    "https://github.com/login/oauth/authorize?client_id=1c876bdc6f2e7dbe8f72&redirect_uri=https://api.x-baike.com/user/oauth/github";
};

export function LoginForm() {
  return (
    <Flex w="100%" h="50px" onClick={handleOnClick}>
      <SvgWrapper>
        <GithubSvg />
      </SvgWrapper>
    </Flex>
  );
}

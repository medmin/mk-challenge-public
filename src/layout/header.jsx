import React, { useEffect, useCallback } from "react";
import { Wrapper, Logo, AvatarPlaceholder, DefaultAvatar } from "./header-parts";
import { Link } from "react-router-dom";
import { GLOBAL_CLASS_NAMES } from "./css-vars";
import { ROUTES } from "src/constants";
import { useSelector, useDispatch } from "react-redux";
import { Alert } from "src/utils/x-alert";

export default function Header() {
  const dispatch = useDispatch();

  return <Wrapper className={GLOBAL_CLASS_NAMES.HEADER}></Wrapper>;
}

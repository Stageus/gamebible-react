import React from "react";
import HeaderItem from "../component/HeaderItem";
import GameListNavContainer from "./GameListNavContainer";

const HeaderNavContainer = () => {
  const MenuNullUrl = [
    "/signIn",
    "/signUp",
    "/resetPW",
    "/changePW",
    "/personalInfo",
    "/editPersonalInfo",
    "/alarm",
  ];
  return (
    <>
      <HeaderItem {...{ MenuNullUrl }} />
      <GameListNavContainer {...{ MenuNullUrl }} />
    </>
  );
};

export default HeaderNavContainer;

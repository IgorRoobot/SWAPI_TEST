import { Header } from "../Header";
import { Outlet } from "react-router-dom";
import React from "react";
import { BodyWrapper } from "./styles";

export const Layout = () => {
  return (
    <>
      <Header />
      <BodyWrapper>
        <Outlet />
      </BodyWrapper>
    </>
  );
};

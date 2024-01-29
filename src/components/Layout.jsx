import React from "react";
import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";

const TitleBox = styled.div`
  margin: 0;
  padding: 10px;
  display: flex;
  align-items: center;
  height: 230px;
  background-image: url("assets/txt.jpg");
`;

const TitlefontColor = styled.span`
  color: #3b98b5;
`;

const H1Style = styled.h1`
  font-size: 28pt;
  font-weight: bold;
  margin-left: 70px;
`;

function Layout(props) {
  return (
    <>
      <TitleBox>
        <H1Style>
          from MOA to<br />
          <TitlefontColor>TOMORROW X TOGETHER</TitlefontColor>
        </H1Style>
      </TitleBox>
      <HeaderMenu />
      {props.children}
    </>
  );
}

export default Layout;

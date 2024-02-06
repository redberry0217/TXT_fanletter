import React from "react";
import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import MemberClicked from "./MemberClicked";
import { useState } from "react";

function Layout({ toWhom }) {
  const [activeMember, setActiveMember] = useState(toWhom || "SOOBIN");

  return (
    <>
      <TitleBox>
        <H1Style>
          from MOA to
          <br />
          <TitlefontColor>TOMORROW X TOGETHER</TitlefontColor>
        </H1Style>
      </TitleBox>
      <HeaderMenu
        activeMember={activeMember}
        setActiveMember={setActiveMember}
        toWhom={toWhom}
      />
      <MemberClicked
        activeMember={activeMember}
        setActiveMember={setActiveMember}
        toWhom={toWhom}
      />
    </>
  );
}

const TitleBox = styled.div`
  margin: 0;
  padding: 10px;
  display: flex;
  align-items: center;
  height: 230px;
  background-image: url("assets/txt.jpg");
`;

const TitlefontColor = styled.span`
  color: #4b85d0;
`;

const H1Style = styled.h1`
  font-size: 28pt;
  font-weight: bold;
  margin-left: 70px;
`;

export default Layout;

import React from "react";
import styled from "styled-components";

const MenuBackground = styled.div`
  background: linear-gradient(90deg, #b0d0ff, #d1eee0);
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MemberBox = styled.div`
  height: 20px;
  margin-left: 10px;
  margin-right: 10px;
  font-weight: bold;
`;
const Members = ["SOOBIN", "YEONJUN", "BEOMGYU", "TAEHYUN", "HUENINGKAI"];

function HeaderMenu() {
  return (
    <>
      <MenuBackground>
        {Members.map((member, index) => (
          <React.Fragment key={index}>
            <MemberBox>{member}</MemberBox>
            {index !== Members.length - 1 && <span>|</span>}
          </React.Fragment>
        ))}
      </MenuBackground>
    </>
  );
}

export default HeaderMenu;

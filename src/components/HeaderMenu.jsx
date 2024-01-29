import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MenuBackground = styled.div`
  background: linear-gradient(90deg, #b0d0ff, #d1eee0);
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MemberBox = styled.div`
  height: 20px;
  margin-left: 10px;
  margin-right: 10px;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;

`;
const Members = ["SOOBIN", "YEONJUN", "BEOMGYU", "TAEHYUN", "HUENINGKAI"];

function HeaderMenu() {
  const navigate = useNavigate();
  const handleMemberClick = (member) => {
    navigate(`/${member.toLowerCase()}`);
  };

  return (
    <>
      <MenuBackground>
        {Members.map((member, index) => (
          <React.Fragment key={index}>
            <MemberBox onClick={() => handleMemberClick(member)}>
              {member}
            </MemberBox>
            {index !== Members.length - 1 && <span>|</span>}
          </React.Fragment>
        ))}
      </MenuBackground>
    </>
  );
}

export default HeaderMenu;

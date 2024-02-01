import React from "react";
import AddForm from "./AddForm";
import LetterList from "./LetterList";
import styled from "styled-components";

const FanletterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  margin-bottom: 35px;
`;
function MemberClicked({ activeMember, setActiveMember, letters, setLetters }) {
  return (
    <FanletterBox>
      <AddForm
        letters={letters}
        setLetters={setLetters}
        activeMember={activeMember}
        setActiveMember={setActiveMember}
      />
      <LetterList activeMember={activeMember} letters={letters} />
    </FanletterBox>
  );
}

export default MemberClicked;

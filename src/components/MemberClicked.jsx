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
function MemberClicked({ activeMember, letters, setLetters }) {
  return (
    <FanletterBox>
      <AddForm letters={letters} setLetters={setLetters} />
      <LetterList activeMember={activeMember} letters={letters} />
    </FanletterBox>
  );
}

export default MemberClicked;

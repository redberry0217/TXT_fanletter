import React from 'react'
import AddForm from './AddForm'
import LetterList from './LetterList'
import styled from 'styled-components'

const FanletterBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
    margin-bottom: 35px;
`
    function MemberClicked({activeMember}) {
  return (
    <FanletterBox>
      {activeMember}
    <AddForm></AddForm>
    <LetterList activeMember={activeMember}></LetterList>
    </FanletterBox>
  )
}

export default MemberClicked














/* import React from "react";
import FanletterPage from "components/FanletterPage";

function MemberClicked({activeMember}) {
  return (
    <>
      <div>{activeMember}</div>
      <FanletterPage activeMember={activeMember}/>
    </>
  );
}

export default MemberClicked; */

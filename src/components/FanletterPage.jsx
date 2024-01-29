import React from 'react'
import WriteForm from './WriteForm'
import LetterList from './LetterList'
import styled from 'styled-components'

const FanletterBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

function FanletterPage() {
  return (
    <FanletterBox>
    <WriteForm></WriteForm>
    <LetterList></LetterList>
    </FanletterBox>
  )
}

export default FanletterPage
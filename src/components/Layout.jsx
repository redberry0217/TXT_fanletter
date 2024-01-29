import React from 'react'
import styled from 'styled-components'
import HeaderMenu from './HeaderMenu'

const TitleBox = styled.div`
  margin: 0;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`

const TitlefontColor = styled.span`
  color: #3b98b5;
`

function Layout( props ) {
  return (
    <>
    <TitleBox><h2>from MOA to <TitlefontColor>TOMORROW X TOGETHER</TitlefontColor></h2></TitleBox>
    <HeaderMenu></HeaderMenu>
    {props.children}
    </>
  )
}

export default Layout
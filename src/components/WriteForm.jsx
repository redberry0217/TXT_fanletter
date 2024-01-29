import React from "react";
import styled from "styled-components";

const WriteBox = styled.div`
  margin-top: 35px;
  width: 650px;
  background-color: #e9f7ff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  font-weight: bold;
  box-sizing: border-box;
`;

const StyledInput = styled.input`
  width: 190px;
  padding: 5px;
  margin: 10px;
  margin-right:65px;
  border: 1px solid grey;
  border-radius: 7px;
`;

const StyledSelect = styled.select`
  width: 190px;
  margin-left: 10px;
  padding: 5px;
  border: 1px solid grey;
  border-radius: 7px;
`;

const StyledBtn = styled.button`
  width: 120px;
  margin-top: 20px;
  padding: 5px;
  background-color: #d1d8e0;
  border: 0px;
  border-radius: 7px;
  cursor: pointer;
`;

const StyledTextarea = styled.textarea`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
  height: 70px;
  border: 1px solid grey;
  border-radius: 7px;
`;
const SubmitBtnBox = styled.div`
  display: flex;
  justify-content: center;
`;
function WriteForm() {
  return (
    <WriteBox>
      <form>
        <div>
          닉네임 <StyledInput 
          type="text"
          placeholder="최대 20자 입력 가능"
          maxLength="20"
          />
          받는 멤버
          <StyledSelect>
            <option value="soobin">SOOBIN</option>
            <option value="yeonjun">YEONJUN</option>
            <option value="beomgyu">BEOMGYU</option>
            <option value="taehyun">TAEHYUN</option>
            <option value="hueningkai">HUENINGKAI</option>
          </StyledSelect>
        </div>
        <div>
          내용
          <br />
          <StyledTextarea 
          placeholder="최대 100자 작성 가능"
          maxLength="100"/>
        </div>
        <SubmitBtnBox>
          <StyledBtn type="submit">등록하기</StyledBtn>
        </SubmitBtnBox>
      </form>
    </WriteBox>
  );
}

export default WriteForm;

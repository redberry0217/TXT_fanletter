import React, { useState, useContext } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { FanletterContext } from "context/FanletterContext";

const WriteBox = styled.div`
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
  margin-right: 65px;
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
function AddForm({ setActiveMember }) {
  const letterData = useContext(FanletterContext);
  const [nickname, setNickname] = useState("");
  const [writedTo, setWritedTo] = useState("SOOBIN");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nickname || !content) {
      alert("닉네임과 내용을 모두 입력하세요.");
    } else {
      const currentDate = new Date();
      const newLetter = {
        createdAt: currentDate.toISOString(),
        nickname,
        content,
        writedTo,
        id: uuidv4(),
        avatar: "assets/user_icon.png",
      };

      letterData.setLetters((prevletters) => [...prevletters, newLetter]);
      setNickname("");
      setContent("");
      setWritedTo("SOOBIN");

      setActiveMember(writedTo);
    }
  };
  return (
    <WriteBox>
      <form onSubmit={handleSubmit}>
        <div>
          닉네임{" "}
          <StyledInput
            type="text"
            placeholder="최대 20자 입력 가능"
            maxLength="20"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          받는 멤버
          <StyledSelect
            value={writedTo}
            onChange={(e) => setWritedTo(e.target.value)}
          >
            <option value="SOOBIN">SOOBIN</option>
            <option value="YEONJUN">YEONJUN</option>
            <option value="BEOMGYU">BEOMGYU</option>
            <option value="TAEHYUN">TAEHYUN</option>
            <option value="HUENINGKAI">HUENINGKAI</option>
          </StyledSelect>
        </div>
        <div>
          내용
          <br />
          <StyledTextarea
            placeholder="최대 100자 작성 가능"
            maxLength="100"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <SubmitBtnBox>
          <StyledBtn type="submit">✔️등록하기</StyledBtn>
        </SubmitBtnBox>
      </form>
    </WriteBox>
  );
}

export default AddForm;

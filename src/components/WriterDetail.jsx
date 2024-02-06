import React from "react";
import styled from "styled-components";

function WriterDetail({ letter }) {
  return (
    <div>
      <WriteInfo>
        <img
          src={
            letter.avatar.startsWith("http")
              ? letter.avatar
              : `/${letter.avatar}`
          }
          width="50"
          alt="사용자 이미지"
        />
        <NicknameStyle>{letter.nickname}</NicknameStyle>
        <CreateAtStyle>{formatDate(letter.createdAt)}</CreateAtStyle>
      </WriteInfo>
    </div>
  );
}

const WriteInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const NicknameStyle = styled.div`
  width: 250px;
  margin-left: 20px;
  font-weight: bold;
`;

const CreateAtStyle = styled.div`
  margin-left: 230px;
  font-weight: bold;
  color: gray;
`;

const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const date = new Date(dateString);
  return date.toLocaleDateString("ko-KR", options);
};

export default WriterDetail;

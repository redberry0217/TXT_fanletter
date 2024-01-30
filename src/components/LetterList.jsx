import React from "react";
import styled from "styled-components";
import fakeData from "../fakeData.json";

const LetterCard = styled.div`
  border: 1px solid gray;
  border-radius: 15px;
  margin-top: 35px;
  width: 650px;
  display: flex;
  flex-direction: row;
  padding: 30px;
`;

const CardContent = styled.div`
  margin-left: 30px;
`;
const NickName = styled.p`
  font-weight: bold;
  line-height: 0.1;
`;

const Letter = styled.p`
  font-size: 20pt;
  line-height: 1.2;
  margin-top: 15px;
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const WriteDate = styled.p`
  text-align: right;
  line-height: 0.1;
  margin-top: 35px;
`;

function LetterList({activeMember}) {

  /** 클릭한 멤버에게 쓴 팬레터만 필터링 */
  const filteredLetters = fakeData.filter(
    (letter) => letter.writedTo === activeMember
  )

  return (
    <section>
      {filteredLetters.map((letter) => (
        <LetterCard key={letter.id}>
          <div>
            <img src={letter.avatar} alt="사용자 아바타" width="50" />
          </div>
          <CardContent>
            <NickName>{letter.nickname}</NickName>
            <Letter>
              {letter.content}
            </Letter>
            <WriteDate>{formatDate(letter.createdAt)}</WriteDate>
          </CardContent>
        </LetterCard>
      ))}
    </section>
  );
};

/** fakeData.json 내 createdAt 정보를 원하는 형식으로 가공 */
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', options);
  };

export default LetterList;

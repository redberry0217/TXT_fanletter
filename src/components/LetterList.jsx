import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NoLettersYet from "./NoLettersYet";

const LetterCard = styled.div`
  border: 1px solid gray;
  border-radius: 15px;
  margin-top: 35px;
  width: 650px;
  display: flex;
  flex-direction: row;
  padding: 30px;
  cursor: pointer;
`;

const CardContent = styled.div`
  margin-left: 30px;
  width: 100%;
  overflow: hidden;
`;
const NickName = styled.p`
  font-weight: bold;
  line-height: 1;
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
  line-height: 1;
  margin-top: 35px;
`;

function LetterList({ activeMember, letters }) {
  const navigate = useNavigate();

  /** 클릭한 멤버에게 쓴 팬레터만 필터링 */
  const filteredLetters = letters.filter(
    (letter) => letter.writedTo === activeMember
  );
  const handleCardClick = (id) => {
    // (1) detail로 갔을 때, 현재 누구로 선택돼있는지 알 필요가 있다.
    navigate(`/detail/${id}`);
  };

  return (
    <section>
      {filteredLetters.length === 0 ? (
        <NoLettersYet activeMember={activeMember} />
      ) : (
        filteredLetters
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map((letter) => (
            <LetterCard
              key={letter.id}
              onClick={() => handleCardClick(letter.id, letters, activeMember)}
            >
              <div>
                <img src={letter.avatar} alt="사용자 아바타" width="50" />
              </div>
              <CardContent>
                <NickName>{letter.nickname}</NickName>
                <Letter>{letter.content}</Letter>
                <WriteDate>{formatDate(letter.createdAt)}</WriteDate>
              </CardContent>
            </LetterCard>
          ))
      )}
    </section>
  );
}

/** fakeData.json 내 createdAt 정보를 원하는 형식으로 가공 */
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

export default LetterList;

import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import WriterDetail from "components/WriterDetail";
import { FanletterContext } from "context/FanletterContext";

const DetailBackground = styled.div`
  background-color: #e9f7ff;
  height: 910px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const DetailTitle = styled.p`
  font-size: 23pt;
  font-weight: bold;
`;

const TxT = styled.span`
  color: #4b85d0;
`;

const DetailCard = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  width: 800px;
  height: 470px;
  margin: 35px;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

const LineStyle = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  height: 1px;
  background-color: gray;
`;

const WritedToStyle = styled.div`
  padding: 10px;
  font-weight: bold;
`;

const ContentStyle = styled.div`
  padding: 10px;
  font-size: 18pt;
  line-height: 1.5;
`;

const BtnsStyle = styled.div`
  margin-top: 50px;
  margin-right: 10px;
  text-align: right;
`;

const StyledBtn = styled.button`
  width: 120px;
  margin: 5px;
  padding: 5px;
  background-color: #d1d8e0;
  border: 0px;
  border-radius: 7px;
  cursor: pointer;
`;

const TextareaStyle = styled.textarea`
  height: 200px;
  padding: 5px;
  border: 1px solid grey;
  border-radius: 7px;
`;

function Detail() {
  const letterData = useContext(FanletterContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const letter = letterData.letters.find(
    (letter) => letter.id.toString() === id
  );

  const toWhom = letter.writedTo;

  if (!letter) {
    alert("해당 팬레터를 찾을 수 없습니다.");
    navigate(`/`);
  }

  /** 뒤로가기 버튼  */
  const handleGobackClick = () => {
    navigate(`/`);
  };

  /** 삭제하기 버튼 */
  const handleDelete = (id) => {
    const deleteConfirm = window.confirm("팬레터를 삭제하시겠습니까?");
    if (deleteConfirm) {
      letterData.setLetters((prevletters) => {
        const newLetters = prevletters.filter((letter) => letter.id !== id);
        return [...newLetters];
      });

      // (2) 원래 메인에서 누가 선택돼있었는지 알아야 함
      navigate(`/`, {
        state: {
          previousValue: toWhom,
        },
      });
    } else {
      return;
    }
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState("");

  /** 수정하기 버튼 */
  const handleEditClick = () => {
    setIsEditing(true);
    setEditedContent(letter.content);
  };

  /** 수정하기 화면에서 저장하기 버튼 */
  const handleSaveClick = () => {
    // 입력된 값이 없을 때
    if (!editedContent) {
      alert("내용을 입력해주세요.");
      return;
    }
    // 변경된 내용이 없을 때
    if (editedContent.trim() === letter.content.trim()) {
      alert("변경된 내용이 없습니다.");
      return;
    }

    // 변경된 내용이 있을 때
    letterData.setLetters((prevLetters) => {
      const updatedLetters = prevLetters.map((item) => {
        if (item.id === letter.id) {
          return { ...item, content: editedContent };
        }
        return item;
      });
      return updatedLetters;
    });

    setIsEditing(false);
    setEditedContent("");
  };

  /** 수정하기 화면에서 취소하기 버튼 */
  const handleCancelClick = () => {
    const cancelConfirm = window.confirm("팬레터 수정을 취소합니다.");
    if (cancelConfirm) {
      setIsEditing(false);
    } else {
      return;
    }
  };

  return (
    <DetailBackground>
      <DetailTitle>
        from MOA to <TxT>TOMORROW X TOGETHER</TxT>
      </DetailTitle>
      <DetailCard>
        <WriterDetail letter={letter} />
        <LineStyle />
        <WritedToStyle>
          TO : <TxT>{letter.writedTo}</TxT>
        </WritedToStyle>
        {isEditing ? (
          <TextareaStyle
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            maxLength="100"
          />
        ) : (
          <ContentStyle>{letter.content}</ContentStyle>
        )}
        <BtnsStyle>
          {isEditing ? (
            <StyledBtn onClick={handleSaveClick}>✔️저장하기</StyledBtn>
          ) : (
            <StyledBtn onClick={handleEditClick}>✏️수정하기</StyledBtn>
          )}
          {isEditing ? (
            <StyledBtn onClick={handleCancelClick}>✖️취소하기</StyledBtn>
          ) : (
            <StyledBtn onClick={() => handleDelete(letter.id)}>
              ❌삭제하기
            </StyledBtn>
          )}
        </BtnsStyle>
      </DetailCard>
      <StyledBtn onClick={handleGobackClick} title="홈으로 돌아갑니다">
        🏠 돌아가기
      </StyledBtn>
    </DetailBackground>
  );
}

export default Detail;

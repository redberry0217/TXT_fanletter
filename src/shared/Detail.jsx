import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
  height: 500px;
  margin: 35px;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

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

function Detail() {
  const navigate = useNavigate();
  const handleGobackClick = () => {
    navigate(`/`);
  };

  return (
    <DetailBackground>
      <DetailTitle>
        from MOA to <TxT>TOMORROW X TOGETHER</TxT>
      </DetailTitle>
      <DetailCard>
        <WriteInfo>
          <img src="/assets/user_icon.png" width="50" />
          <NicknameStyle>닉네임</NicknameStyle>
          <CreateAtStyle>2023. 11. 3. 오전 11:07</CreateAtStyle>
        </WriteInfo>
        <LineStyle />
        <WritedToStyle>
          TO : <TxT>SOOBIN</TxT>
        </WritedToStyle>
        <ContentStyle>
          수빈짱 Vitae recusandae tenetur debitis impedit ut dolorem atque
          reprehenderit magnam. Cum dolor magnam commodi qui perferendis. Vel
          temporibus soluta. Eum delectus blanditiis. Neque dicta non quod ex.
          Maiores aspernatur fuga reprehenderit a magni eaque fuga voluptatum
          hic.
        </ContentStyle>
        <BtnsStyle>
          <StyledBtn>수정하기</StyledBtn>
          <StyledBtn>삭제하기</StyledBtn>
        </BtnsStyle>
      </DetailCard>
      <StyledBtn onClick={handleGobackClick} title="홈으로 돌아갑니다">
        🏠 돌아가기
      </StyledBtn>
    </DetailBackground>
  );
}

export default Detail;

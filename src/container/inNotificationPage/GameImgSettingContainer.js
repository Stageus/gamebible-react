import { React, useState } from "react";

import MainLogo from "../../img/HeaderLogo.svg";

import styled from "styled-components";
import { Img } from "../../style/ImgStyle";
import { Div } from "../../style/LayoutStyle";
import { Input } from "../../style/InputStyle";
import { setColor } from "../../style/SetStyle";
import { Button } from "../../style/ButtonStyle";
import { Section } from "../../style/LayoutStyle";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const RelativeDiv = styled(Div)`
  position: relative;
`;
const RelativeSection = styled(Section)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.5);
`;

const RightButton = styled(Button)`
  position: absolute;
  right: 20px;
  top: 10px;
`;

const GameTextInput = styled(Input)`
  padding: 5px;
`;

const GameImgSettingContainer = (props) => {
  const { setGameImgEvent, idx } = props;
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();

  const [thumbnailImg, setThumbnailImg] = useState(null);
  const [bannerImg, setBannerImg] = useState(null);
  const [title, setTitle] = useState("");
  const [titleKor, setTitleKor] = useState("");
  const [titleEng, setTitleEng] = useState("");

  const approveGameEvent = async () => {
    // 이미지 파일 선택 하지 않고 확인 버튼 클릭 시
    if (!thumbnailImg || !bannerImg || !title || !titleKor || !titleEng) {
      alert("입력을 완료해주세요");
      return;
    }

    // body 내 전달 데이터
    const formData = new FormData();
    formData.append("requestIdx", idx);
    formData.append("thumbnail", thumbnailImg);
    formData.append("banner", bannerImg);
    formData.append("title", title);
    formData.append("titleKor", titleKor);
    formData.append("titleEng", titleEng);

    const response = await fetch(`${process.env.REACT_APP_API_KEY}/admin/game`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cookies.token}`,
      },
      body: formData,
    });

    if (response.status === 201) {
      alert("게임 승인이 완료되았습니다.");
      setGameImgEvent(); // 현재 컨테이너 꺼짐
      navigate("./"); // 관리자 알림페이지로 이동
    }
    if (response.status === 400) {
      console.log("Bad request");
    }
    if (response.status === 409) {
      alert("☠️ 이미 존재하는 게임입니다 ☠️");
    }
    if (response.status === 500) {
      console.log("Server Error");
    }
  };
  const handleThumbnailImgChange = (event) => {
    setThumbnailImg(event.target.files[0]);
  };
  const handleBannerImgChange = (event) => {
    setBannerImg(event.target.files[0]);
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTitleKorChange = (event) => {
    setTitleKor(event.target.value);
  };
  const handleTitleEngChange = (event) => {
    setTitleEng(event.target.value);
  };

  return (
    <RelativeSection $flex="h_center_center" $width="100vw" $height="100vh">
      <RelativeDiv $flex="v_start_center" $width="500px" $backgroundColor="white">
        <RightButton
          $width="30px"
          $height="30px"
          $flex="h_center_center"
          $backgroundColor="none"
          $borderStyle={`1px solid ${setColor("black")}`}
          onClick={setGameImgEvent}
        >
          ❌
        </RightButton>
        <Div $width="100%" $flex="h_center_center">
          <Img src={MainLogo} alt="MainLogo" />
        </Div>
        <Section $flex="v_between_center" $margin="40px 0">
          <Div $margin="0 0 20px 0">
            <Div>게임 썸네일 이미지</Div>
            <Input type="file" onChange={handleThumbnailImgChange} $margin="0 0 20px 0" />

            <Div>게임 배너 이미지</Div>
            <Input type="file" onChange={handleBannerImgChange} $margin="0 0 20px 0" />

            <Div>게임명</Div>
            <GameTextInput
              type="input"
              value={title}
              onChange={handleTitleChange}
              $margin="0 0 20px 0"
            />

            <Div>게임 한국어명</Div>
            <GameTextInput
              type="input"
              value={titleKor}
              onChange={handleTitleKorChange}
              $margin="0 0 20px 0"
            />

            <Div>게임 영문명</Div>
            <GameTextInput
              type="input"
              value={titleEng}
              onChange={handleTitleEngChange}
              $margin="0 0 20px 0"
            />
          </Div>

          <Div $flex="h_between_center" $width="100%">
            <Button
              $padding="5px 10px"
              $backgroundColor="default"
              $color="major"
              $borderRadius="10px"
              onClick={setGameImgEvent}
            >
              취소
            </Button>
            <Button
              $padding="5px 10px"
              $backgroundColor="major"
              $color="white"
              $borderRadius="10px"
              onClick={approveGameEvent}
            >
              확인
            </Button>
          </Div>
        </Section>
      </RelativeDiv>
    </RelativeSection>
  );
};

export default GameImgSettingContainer;

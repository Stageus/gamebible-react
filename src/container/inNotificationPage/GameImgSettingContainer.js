import { React, useRef } from "react";

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

const GameImgSettingContainer = (props) => {
  const { setGameImgEvent, idx } = props;
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();

  const thumbnailImg = useRef();
  console.log("thumbnailImg: ", thumbnailImg.current);

  const bannerImg = useRef();
  console.log("bannerImg: ", bannerImg.current);

  const approveGameEvent = async () => {
    // 이미지 파일 선택 하지 않고 확인 버튼 클릭 시
    if (!thumbnailImg.current || !bannerImg.current) {
      alert("이미지를 선택하세요.");
      return;
    }

    // body 내 전달 데이터
    const formData = new FormData();
    formData.append("requestIdx", idx);
    formData.append("thumbnail", thumbnailImg.current);
    formData.append("banner", bannerImg.current);

    const response = await fetch(`${process.env.REACT_APP_API_KEY}/admin/game`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cookies.token}`,
      },
      body: formData,
    });

    if (response.status === 200) {
      alert("게임 승인이 완료되았습니다.");
      navigate("./");
    }
    if (response.status === 400) {
      alert(response.message);
    }
    if (response.status === 409) {
      alert(response.message);
    }
    if (response.status === 500) {
      alert(response.message);
    }
  };

  const handleThumbnailImgChange = (event) => {
    thumbnailImg.current = event.target.files[0];
    console.log("thumbnailImg.current: ", thumbnailImg.current);
  };
  const handleBannerImgChange = (event) => {
    bannerImg.current = event.target.files[0];
    console.log("bannerImg.current: ", bannerImg.current);
  };

  return (
    <RelativeSection $flex="h_center_center" $width="100vw" $height="100vh">
      <RelativeDiv $flex="v_start_center" $width="500px" $height="300px" $backgroundColor="white">
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
            <Div $margin="0 0 40px 0">
              <Div>게임 썸네일 이미지</Div>
              <Input type="file" ref={thumbnailImg} onChange={handleThumbnailImgChange} />
            </Div>
            <Div>게임 배너 이미지</Div>
            <Input type="file" ref={bannerImg} onChange={handleBannerImgChange} />
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

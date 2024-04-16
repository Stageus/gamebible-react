import { React, useState, useEffect } from "react";

import { styled } from "styled-components";
import { Img } from "../style/ImgStyle";
import { Div } from "../style/LayoutStyle";

const BannerLayout = styled(Div)`
  width: 100%;
  background-size: cover;
`;
const BannerImg = styled(Img)`
  width: 100%;
  aspect-ratio: 1546 / 423;
`;

const BannerImgItem = (props) => {
  const { gameIdx } = props;

  const [, setBannerImgData] = useState(null);

  const [bannerImg, setBannerImg] = useState(null);

  useEffect(() => {
    const bannerImgItem = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/game/${gameIdx}/banner`);
      const result = await response.json();
      if (result.data?.length > 0) {
        setBannerImg(result.data[0].imgPath);
      } else {
        console.log("이미지를 찾을 수 없습니다.");
      }
      if (response.status === 200) {
        setBannerImgData(result.data);
      }
      if (response.status === 500) {
        console.log(result.message);
      }
    };
    bannerImgItem();
  }, [gameIdx]);

  return (
    <BannerLayout $width="100%">
      <BannerImg src={bannerImg} />
    </BannerLayout>
  );
};

export default BannerImgItem;

import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { styled } from "styled-components";
import { Img } from "../style/ImgStyle";
import { Div } from "../style/LayoutStyle";
import bannerImg from "../img/bannerImg.svg";

const BannerImg = styled(Img)`
  width: 100%;
`;

const BannerImgItem = () => {
  let { gameIdx } = useParams();

  const [bannerImgData, setBannerImgData] = useState(null);

  const [bannerImg, setBannerImg] = useState(null);

  useEffect(() => {
    const bannerImgItem = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/game/${gameIdx}/banner`);
      const result = await response.json();
      setBannerImg(result.data[0].imgPath);

      if (response.status === 200) {
        setBannerImgData(result.data);
      }
      if (response.status === 500) {
        console.log(result.message);
      }
    };
    bannerImgItem();
  }, []);

  return (
    <Div $width="100%">
      <BannerImg src={bannerImg} />
    </Div>
  );
};

export default BannerImgItem;

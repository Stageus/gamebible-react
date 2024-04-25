import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import { cookies, useCookies } from "react-cookie";

import deleteImg from "../../img/deleteImg.svg";
import styled from "styled-components";
import { Button } from "../../style/ButtonStyle";
import { Img } from "../../style/ImgStyle";

const DeleteBtn = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
`;
const DeletePostContainer = () => {
  const { data, status, request } = useFetch();
  const { gameIdx, postIdx } = useParams();

  const navigate = useNavigate();
  const [cookies] = useCookies(["token"]);

  const deleteClickEvent = async () => {
    await request(`/post/${postIdx}`, "DELETE", null, { Authorization: `Bearer ${cookies.token}` });
  };

  useEffect(() => {
    if (status === 200) {
      alert("게시글이 삭제되었습니다");
      navigate(`/game/${gameIdx}/community?page=1`);
    }
  }, [data, status]);

  return (
    <DeleteBtn $backgroundColor="white" onClick={deleteClickEvent}>
      <Img $height="30px" src={deleteImg} alt="댓글 삭제하기" />
    </DeleteBtn>
  );
};

export default DeletePostContainer;

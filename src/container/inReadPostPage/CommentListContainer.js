import React, { useEffect, useState } from "react";

import CommentListItem from "../../component/CommentListItem";

import { useRecoilState } from "recoil";
import userInfoAtom from "../../recoil/userInfoAtom";
import useFetch from "../../hook/useFetch";
import { cookies, useCookies } from "react-cookie";

const CommentListContainer = (props) => {
  const { commentListData, deleteComment, setDeleteComment } = props;
  const { data, status, request } = useFetch();

  const [userInfo, ,] = useRecoilState(userInfoAtom);
  const [cookies] = useCookies(["token"]);

  const deleteClickEvent = async (value) => {
    await request(`/comment/${value}`, "DELETE", null, {
      Authorization: `Bearer ${cookies.token}`,
    });
    setDeleteComment(!deleteComment);
  };

  return (
    <>
      {commentListData.map((elem) => {
        return (
          <CommentListItem
            key={elem.idx}
            {...{ data: elem, userIdx: userInfo.user_idx, deleteClickEvent }}
          />
        );
      })}
    </>
  );
};

export default CommentListContainer;

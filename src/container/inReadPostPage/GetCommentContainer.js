import React, { useEffect, useState } from "react";

import CommentListItem from "../../component/CommentListItem";
import { useParams } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import { useCookies } from "react-cookie";

const GetCommentContainer = () => {
  const { gameIdx, pageIdx, postIdx } = useParams();
  const [lastidx, setLastIdx] = useState(0);
  const [cookies] = useCookies(["token"]);
  const { data, error, status, request } = useFetch();

  useEffect(() => {
    const fetchData = async () => {
      await request(`/comment/all?postidx=${postIdx}&lastidx=${lastidx}`, "GET", null, {
        Authorization: `Bearer ${cookies.token}`,
      });
    };
    fetchData();
  }, []);

  return (
    <>
      {data?.data.map((elem) => {
        return <CommentListItem key={elem.idx} data={elem} />;
      })}
    </>
  );
};
export default GetCommentContainer;

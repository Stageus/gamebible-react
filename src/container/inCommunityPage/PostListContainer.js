import React, { useState, useEffect } from "react";
import useFetch from "../../hook/useFetch";
import { Link, useParams, useLocation } from "react-router-dom";
import PostListItem from "../../component/PostListItem";
import PaginationContainer from "../PaginationContainer";

import { Section, Div } from "../../style/LayoutStyle";

const PostListContainer = (props) => {
  const { gameIdx } = useParams();
  const location = useLocation();
  const pageIdx = new URLSearchParams(location.search).get("page");
  const { data, request } = useFetch();
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        request(`/post/all?gameidx=${gameIdx}&page=${pageIdx}`, "GET");
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [gameIdx, pageIdx]);

  useEffect(() => {
    if (data) {
      setTotalPages(Math.ceil(data.totalPosts / 20));
    }
  }, [data]);

  return (
    <Section $width="100%">
      <Div $width="100%" $padding="30px 30px 0 30px">
        {data &&
          data.data.map((elem) => {
            return (
              <Link key={`post${elem.postIdx}`} to={`/game/${gameIdx}/post/${elem.postIdx}`}>
                <PostListItem data={elem} />
              </Link>
            );
          })}

        <PaginationContainer {...{ totalPages, pageIdx }} />
      </Div>
    </Section>
  );
};

export default PostListContainer;

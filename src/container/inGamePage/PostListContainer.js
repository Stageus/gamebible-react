import React, { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import PostListItem from "../../component/PostListItem";
import PaginationContainer from "./PaginationContainer";

import { Section, Div } from "../../style/LayoutStyle";

const PostListContainer = (props) => {
  const { gameIdx, pageIdx } = useParams();
  const [data, setData] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_KEY}/post?gameidx=${gameIdx}&page=${pageIdx}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const result = await response.json();
        setData(result.data);
        setTotalPosts(result.totalPosts);
        setLoading(false);
      } catch (error) {
        console.log(`Error: ${error.message}`);
        setLoading(false);
      }
    };

    fetchData();
    console.log(data);
  }, [gameIdx, pageIdx, loading]);

  const pageinationProps = {
    itemCountPerPage: 10,
    pageCount: 10,
    currentPage: { pageIdx },
  };
  return (
    <Section $width="100%">
      <Div $width="100%" $padding="30px 30px 0 30px">
        {data &&
          data.map((elem) => {
            return (
              <Link
                key={`post${elem.idx}`}
                to={`/game/${gameIdx}/community/page/${pageIdx}/post/${elem.idx}`}
              >
                <PostListItem data={elem} />
              </Link>
            );
          })}

        <PaginationContainer
          {...{
            totalItems: totalPosts,
            itemCountPerPage: pageinationProps.itemCountPerPage,
            pageCount: pageinationProps.pageCount,
            currentPage: parseInt(pageinationProps.currentPage.pageIdx),
          }}
        />
      </Div>
    </Section>
  );
};

export default PostListContainer;

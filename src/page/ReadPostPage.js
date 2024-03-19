import React from "react";
import HeaderItem from "../component/HeaderItem";

const dummyData = {
  userIdx: "1234",
};

const ReadPostPage = () => {
  return (
    <>
      <HeaderItem {...{ dummyData }} />
    </>
  );
};

export default ReadPostPage;

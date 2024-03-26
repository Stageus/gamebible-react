import React, { useState, useRef } from "react";

import { Div } from "../../style/LayoutStyle";
import { H1 } from "../../style/TextStyle";
import { Input } from "../../style/InputStyle";
import styled from "styled-components";

const EditorWrapper = styled(Div)`
  border-radius: 4px;
`;

const BorderNoneInput = styled(Input)`
  border-style: none;
  outline: none;
`;

const EditorContainer = styled(Div)`
  outline: none;
`;

const PostEditorContainer = () => {
  const [title, setTitle] = useState("제목");
  const titleRef = useRef(null);

  const titleChangeEvent = (event) => {
    setTitle(event.target.value);
  };

  const titleFocus = () => {
    if (titleRef.current.innerText == "제목") {
      setTitle("");
    }
  };

  const titleBlur = () => {
    if (titleRef.current.innerText == "") {
      setTitle("제목");
    }
  };

  return (
    <>
      <EditorWrapper $backgroundColor="white" $width="100%" $height="100%" $padding="50px">
        <Div $margin="0 0 20px 0" $width="100%">
          <BorderNoneInput
            $width="100%"
            $height="30px"
            $fontSize="large"
            placeholder="제목"
            type="text"
          />
          <Div $width="100%" $height="1px" $backgroundColor="black" $margin="20px 0" />
        </Div>
        <EditorContainer contenteditable="true" $width="100%" $height="500px"></EditorContainer>
      </EditorWrapper>
    </>
  );
};

export default PostEditorContainer;

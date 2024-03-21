import React, { useState } from "react";
import TermsDetailViewContainer from "./TermsDetailViewContainer";
import PrivacyDetailViewContainer from "./PrivacyDetailViewContainer";

import styled from "styled-components";
import { setColor } from "../style/SetStyle";
import { Div } from "../style/LayoutStyle";
import { Input } from "../style/InputStyle";
import { Button } from "../style/ButtonStyle";
import { P } from "../style/TextStyle";

import { useClick } from "../hook/useClick";

const BorderStyleBtn = styled(Button)`
  border: 1px solid ${setColor("black")};
  border-radius: 4px;
`;
const TermsServiceContainer = () => {
  const {
    click: termsServiceChecked,
    setClick: setTermsServiceChecked,
    ClickEvent: termsServiceCheckedEvent,
  } = useClick(false);
  const {
    click: privacyPolicyChecked,
    setClick: setPrivacyPolicyChecked,
    ClickEvent: privacyPolicyCheckedEvent,
  } = useClick(false);

  const { click: termsReadMore, ClickEvent: termsReadMoreEvent } = useClick(false);
  const { click: privacyReadMore, ClickEvent: privacyReadMoreEvent } = useClick(false);

  const [isAllChecked, setIsAllChecked] = useState(false);

  const allCheckedEvent = () => {
    const checkedValue = !isAllChecked;
    setTermsServiceChecked(checkedValue);
    setPrivacyPolicyChecked(checkedValue);
    setIsAllChecked(checkedValue);
  };

  return (
    <>
      <Div $flex="h_start_center" $width="100%" $margin="0 0 10px 0">
        <Input type="checkbox" onChange={allCheckedEvent} checked={isAllChecked}></Input>
        <P $fontSize="small" $margin="0 0 0 10px" onClick={allCheckedEvent}>
          전체 동의
        </P>
      </Div>
      <Div $width="100%" $flex="h_between_center" $margin="0 0 10px 0">
        <Div $flex="h_start_center">
          <Input
            type="checkbox"
            onChange={termsServiceCheckedEvent}
            checked={termsServiceChecked}
          ></Input>
          <P $fontSize="small" $margin="0 0 0 10px" onClick={termsServiceCheckedEvent}>
            이용약관 (필수)
          </P>
        </Div>
        <BorderStyleBtn
          $flex="h_cetner_center"
          $backgroundColor="white"
          $color="black"
          $fontSize="small"
          $width="60px"
          $height="30px"
          onClick={termsReadMoreEvent}
        >
          전문보기
        </BorderStyleBtn>
      </Div>
      <Div $width="100%" $flex="h_between_center" $margin="0 0 10px 0">
        <Div $flex="h_start_center">
          <Input
            type="checkbox"
            onChange={privacyPolicyCheckedEvent}
            checked={privacyPolicyChecked}
          ></Input>
          <P $fontSize="small" $margin="0 0 0 10px" onClick={privacyPolicyCheckedEvent}>
            개인정보 (필수)
          </P>
        </Div>
        <BorderStyleBtn
          $flex="h_cetner_center"
          $backgroundColor="white"
          $color="black"
          $fontSize="small"
          $width="60px"
          $height="30px"
          onClick={privacyReadMoreEvent}
        >
          전문보기
        </BorderStyleBtn>
      </Div>
      {termsReadMore && <TermsDetailViewContainer {...{ termsReadMoreEvent }} />}
      {privacyReadMore && <PrivacyDetailViewContainer {...{ privacyReadMoreEvent }} />}
    </>
  );
};

export default TermsServiceContainer;

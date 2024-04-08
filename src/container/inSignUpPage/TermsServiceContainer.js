import React, { useState } from "react";
import TermsDetailViewContainer from "./TermsDetailViewContainer";
import PrivacyDetailViewContainer from "./PrivacyDetailViewContainer";

import { Div } from "../../style/LayoutStyle";
import { Input } from "../../style/InputStyle";
import { Button } from "../../style/ButtonStyle";
import { P } from "../../style/TextStyle";

import { useClick } from "../../hook/useClick";

const TermsServiceContainer = (props) => {
  const {
    termsServiceChecked,
    setTermsServiceChecked,
    termsServiceCheckedEvent,

    privacyPolicyChecked,
    setPrivacyPolicyChecked,
    privacyPolicyCheckedEvent,
  } = props;

  const { click: termsReadMore, clickEvent: termsReadMoreEvent } = useClick(false);
  console.log("termsReadMoreEvent: ", termsReadMoreEvent);
  console.log("termsReadMore: ", termsReadMore);
  const { click: privacyReadMore, clickEvent: privacyReadMoreEvent } = useClick(false);

  const [isAllChecked, setIsAllChecked] = useState(false);

  const allCheckedEvent = () => {
    const checkedValue = !isAllChecked;
    setTermsServiceChecked(checkedValue);
    setPrivacyPolicyChecked(checkedValue);
    setIsAllChecked(checkedValue);
  };

  return (
    <Div $flex="v_between_start" $width="100%" $margin="0 0 20px 0">
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
        <Button
          $flex="h_cetner_center"
          $backgroundColor="white"
          $color="black"
          $fontSize="small"
          $width="60px"
          onClick={termsReadMoreEvent}
        >
          전문보기
        </Button>
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
        <Button
          $flex="h_cetner_center"
          $backgroundColor="white"
          $color="black"
          $fontSize="small"
          $width="60px"
          onClick={privacyReadMoreEvent}
        >
          전문보기
        </Button>
      </Div>
      {termsReadMore && <TermsDetailViewContainer {...{ termsReadMoreEvent }} />}
      {privacyReadMore && <PrivacyDetailViewContainer {...{ privacyReadMoreEvent }} />}
    </Div>
  );
};

export default TermsServiceContainer;

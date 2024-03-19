import React from "react";

const TermsCheckboxContainer = () => {
  return (
    <Div $width="100%" $flex="h_between_center" $margin="0 0 10px 0">
      <Div>
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
  );
};

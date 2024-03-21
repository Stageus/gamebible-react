import React from "react";

import { Div } from "../style/LayoutStyle";
import { P } from "../style/TextStyle";
import { H1 } from "../style/TextStyle";

const LabelText = (props) => {
  const { dummyTextData } = props;

  return (
    <>
      {Object.values(dummyTextData).map((data) => (
        <Div key={data.key} $width="100%" $flex="v_start_start" $margin="0 0 20px 0">
          <H1 $fontWeight="bold" $margin="0 0 10px 0">
            {data.label}
          </H1>
          <P $width="100%" $height="50px" $flex="h_start_center">
            {data.text}
          </P>
        </Div>
      ))}
    </>
  );
};

export default LabelText;

import React, { useState, useEffect } from "react";
import { Div } from "../style/LayoutStyle";
import { Span } from "../style/TextStyle";
import { Img } from "../style/ImgStyle";
import { Link, useParams, useLocation } from "react-router-dom";

import ArrowRight from "../img/arrowRight.svg";
import ArrowLeft from "../img/arrowLeft.svg";

const PaginationContainer = (props) => {
  const location = useLocation();
  const { gameIdx } = useParams();
  const pageIdx = new URLSearchParams(location.search).get("page");
  const { totalPages } = props;
  const currentIdx = parseInt(pageIdx) || 1;
  const pageCount = Math.min(totalPages, 10);
  const [start, setStart] = useState(1);
  const noPrev = start === 1;
  const noNext = start + pageCount - 1 >= totalPages;

  useEffect(() => {
    if (currentIdx === start + pageCount) setStart((prev) => prev + pageCount);
    if (currentIdx < start) setStart((prev) => prev - pageCount);
  }, [currentIdx, pageCount, start]);

  console.log(currentIdx + "현재 페이지 번호");
  console.log(noNext + "NoNext");

  return (
    <Div $flex="h_center_center" $width="100%">
      {noPrev ? null : ( //이전 버튼
        <Link to={`/game/${gameIdx}/community?page=${start - 1}`}>
          <Img $padding="5px" src={ArrowLeft} alt="<" />
        </Link>
      )}
      {/* 마지막 페이지의 경우 */}
      {totalPages === currentIdx ? (
        <Span $padding="5px" $color="orange" $fontWeight="bold" $fontSize="large">
          {totalPages}
        </Span>
      ) : (
        [...Array(Math.min(pageCount, totalPages + 1))].map((elem, idx) => {
          const pageNumber = start + idx;
          return (
            <Link
              to={`/game/${gameIdx}/community?page=${pageNumber}`}
              key={`pagiNation${pageNumber}`}
            >
              <Span
                $padding="5px"
                $color={currentIdx === pageNumber ? "orange" : "white"}
                $fontWeight={currentIdx === pageNumber ? "bold" : "medium"}
                $fontSize={currentIdx === pageNumber ? "large" : "normal"}
              >
                {pageNumber}
              </Span>
            </Link>
          );
        })
      )}
      {noNext ? null : (
        <Link to={`/game/${gameIdx}/community?page=${start + pageCount}`}>
          <Img $padding="5px" src={ArrowRight} alt=">" />
        </Link>
      )}
    </Div>
  );
};

export default PaginationContainer;

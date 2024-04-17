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
  const [pageRange, setPageRange] = useState(10); // 기본 페이지 범위를 10으로 설정
  const currentIdx = parseInt(pageIdx) || 1;
  const [start, setStart] = useState(1);
  //변수 noPrev가 start === 1 이라면 true
  //아니면 false
  const noPrev = start === 1;
  const noNext = start + pageRange - 1 >= totalPages;

  useEffect(() => {
    if (currentIdx === start + pageRange) {
      setStart((prev) => prev + pageRange);
    }
    if (currentIdx < start) {
      setStart((prev) => prev - pageRange);
    }
  }, [currentIdx, pageRange, start]);

  console.log(Math.min(pageRange, Math.abs(totalPages + 1 - start)));
  console.log(`pageRange${pageRange}`);
  console.log(`totalPages${totalPages}`);
  console.log(`start${start}`);
  console.log(`totalPages + 1 - start${totalPages + 1 - start}`);
  console.log(`최소값 ${Math.min(pageRange, Math.abs(totalPages + 1 - start))}`);

  return (
    <Div $flex="h_center_center" $width="100%">
      {noPrev ? null : (
        <Link to={`/game/${gameIdx}/community?page=${start - 1}`}>
          <Img $padding="5px" src={ArrowLeft} alt="<" />
        </Link>
      )}
      {[...Array(Math.min(pageRange, Math.abs(totalPages - start + 1)))].map((elem, idx) => {
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
      })}
      {noNext ? null : (
        <Link to={`/game/${gameIdx}/community?page=${start + pageRange}`}>
          <Img $padding="5px" src={ArrowRight} alt=">" />
        </Link>
      )}
    </Div>
  );
};

export default PaginationContainer;

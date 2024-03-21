import React, { useState, useEffect } from "react";
import { Div } from "../style/LayoutStyle";
import { Span } from "../style/TextStyle";
import { Img } from "../style/ImgStyle";
import { Link } from "react-router-dom";

import ArrowRight from "../img/arrowRight.svg";
import ArrowLeft from "../img/arrowLeft.svg";

const PaginationContainer = (props) => {
  const { totalItems, itemCountPerPage, pageCount, currentPage } = props;
  const totalPages = Math.ceil(totalItems / itemCountPerPage);
  const [start, setStart] = useState(1);
  const noPrev = start === 1;
  const noNext = start + pageCount - 1 >= totalPages;

  useEffect(() => {
    if (currentPage === start + pageCount) setStart((prev) => prev + pageCount);
    if (currentPage < start) setStart((prev) => prev - pageCount);
  }, [currentPage, pageCount, start]);

  return (
    <Div $flex="h_center_center" $width="100%">
      {noPrev ? null : (
        <Link to={`/CommunityPage/${start - 1}`}>
          <Img $padding="5px" src={ArrowLeft} alt="<" />
        </Link>
      )}

      {[...Array(pageCount)].map((elem, idx) => {
        const pageNumber = start + idx;
        return (
          <Link to={`/CommunityPage/${pageNumber}`} key={`pagiNation${idx}`}>
            <Span
              $padding="5px"
              $color={currentPage === pageNumber ? "orange" : "white"}
              $fontWeight={currentPage === pageNumber ? "bold" : "medium"}
              $fontSize={currentPage === pageNumber ? "large" : "normal"}
            >
              {pageNumber}
            </Span>
          </Link>
        );
      })}
      {noNext ? null : (
        <Link to={`/CommunityPage/${start + pageCount}`}>
          <Img $padding="5px" src={ArrowRight} alt=">" />
        </Link>
      )}
    </Div>
  );
};

export default PaginationContainer;

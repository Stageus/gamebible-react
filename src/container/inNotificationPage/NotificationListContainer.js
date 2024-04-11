import { React, useState, useEffect } from "react";

import styled from "styled-components";
import { Div, Section, Article } from "../../style/LayoutStyle";
import { H1 } from "../../style/TextStyle";
import { Img } from "../../style/ImgStyle";

import noAlarmImg from "../../img/noAlarmImg.svg";
import NotificationListItem from "../../component/NotificationListItem";

import useFetch from "../../hook/useFetch";

const OverFlowDiv = styled(Section)`
  overflow: auto;
`;
const NotiListLayout = styled(Article)`
  width: 100%;
  min-height: 700px;
`;

const NotificationListContainer = () => {
  // const { isAdmin } = { isAdmin: true };

  // const [page, setPage] = useState(1);
  // const [adminNotiListData, setAdminNotiListData] = useState([]);

  // 관리자 승인요청 온 게임 목록보기 GET
  // useEffect(() => {
  //   const getAdminNotiListData = async () => {
  //     const response = await fetch(`${process.env.REACT_APP_API_KEY}/admin/game/request/all`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${cookies.token}`,
  //       },
  //     });

  //     const result = await response.json();

  //     if (response.status === 200) {
  //       setAdminNotiListData(result.data);
  //     } else {
  //       alert(result.message);
  //     }
  //   };

  //   getAdminNotiListData();
  // }, []);

  // // 관리자 승인요청 온 게임 목록 백엔드 state가 업데이트 될 때 마다, page를 1 증가시키기
  // useEffect(() => {
  //   setPage(page + 1);
  // }, [adminNotiListData]);

  // 일반사용자 알림 목록보기 GET

  const [notiListData, setNotiListData] = useState([]);
  const [page, setPage] = useState(1);

  const { data, error, status, request } = useFetch();
  useEffect(() => {
    request(`/account/notification`, "GET", null);
  }, []);

  // 일반사용자 알림 목록 백엔드 state가 업데이트 될 때 마다, page를 1 증가시키기
  // useEffect(() => {
  //   setPage(page + 1);
  // }, [notiListData]);

  useEffect(() => {
    if (status === 200) {
      setNotiListData(data.data);
    } else if (status === 400) {
      alert("유효하지 않은 요청입니다.");
    } else if (status === 401) {
      alert("권한이 없는 사용자입니다.");
    } else if (status === 500) {
      console.log("서버 내부 에러입니다.");
    }
  }, [data]);
  console.log("notiListData: ", notiListData);

  return (
    <OverFlowDiv $height="100%" $flex="v_start_center" $margin="100px 0 0 0" $width="100vw">
      {/* {isAdmin ? (
        <Div $flex="v_start_center" $width="1320px">
          <Div $flex="h_start_center" $width="100%">
            <H1 $fontSize="large" $fontWeight="bold">
              관리자 알림함
            </H1>
          </Div>
          <NotiListLayout $flex="v_center_center">
            {adminNotiListData.length > 0 ? (
              adminNotiListData.map((elem) => {
                return <NotificationListItem key={elem.idx} data={elem} isAdmin />;
              })
            ) : (
              <Div>
                <Img src={noAlarmImg} alt="no alarm" />
              </Div>
            )}
          </NotiListLayout>
        </Div>
      ) : (
        <Div $flex="v_start_center" $width="1320px">
          <Div $flex="h_start_center" $width="100%">
            <H1 $fontSize="large" $fontWeight="bold">
              알림함
            </H1>
          </Div>
          <NotiListLayout $flex="v_center_center">
            {notiListData.length > 0 ? (
              notiListData.map((elem) => {
                return <NotificationListItem key={elem.id} data={elem} />;
              })
            ) : (
              <Div>
                <Img src={noAlarmImg} alt="no alarm" />
              </Div>
            )}
          </NotiListLayout>
        </Div>
      )} */}
      <Div $flex="v_start_center" $width="1320px">
        <Div $flex="h_start_center" $width="100%">
          <H1 $fontSize="large" $fontWeight="bold">
            알림함
          </H1>
        </Div>
        <NotiListLayout $flex="v_center_center">
          {notiListData.length > 0 ? (
            notiListData.map((elem) => {
              return <NotificationListItem key={elem.id} data={elem} />;
            })
          ) : (
            <Div>
              <Img src={noAlarmImg} alt="no alarm" />
            </Div>
          )}
        </NotiListLayout>
      </Div>
    </OverFlowDiv>

    //----------------------------------------------------------------------

    // // 관리자 알림만 보기
    // <Div $flex="v_start_center" $width="1320px">
    //   <Div $flex="h_start_center" $width="100%">
    //     <H1 $fontSize="large" $fontWeight="bold">
    //       관리자 알림함
    //     </H1>
    //   </Div>
    //   <NotiListLayout $flex="v_center_center">
    //     {adminNotiListData.map((elem) => {
    //       return <NotificationListItem key={elem.id} data={elem} />;
    //     })}
    //   </NotiListLayout>
    // </Div>

    //----------------------------------------------------------------------

    // 일반사용자 알림만 보기
    // <Div $flex="v_start_center" $width="1320px">
    //   <Div $flex="h_start_center" $width="100%">
    //     <H1 $fontSize="large" $fontWeight="bold">
    //       알림함
    //     </H1>
    //   </Div>
    //   <NotiListLayout $flex="v_center_center">
    //     {notiListData.map((elem) => {
    //       return <NotificationListItem key={elem.id} data={elem} />;
    //     })}
    //   </NotiListLayout>
    // </Div>
  );
};

export default NotificationListContainer;

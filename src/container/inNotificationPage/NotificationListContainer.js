import { React, useState, useEffect } from "react";

import styled from "styled-components";
import { Div, Section, Article } from "../../style/LayoutStyle";
import { H1 } from "../../style/TextStyle";
import { Img } from "../../style/ImgStyle";

import noAlarmImg from "../../img/noAlarmImg.svg";
import NotificationListItem from "../../component/NotificationListItem";

import { useCookies } from "react-cookie";

const OverFlowDiv = styled(Section)`
  overflow: auto;
`;
const NotiListLayout = styled(Article)`
  width: 100%;
  min-height: 700px;
`;

const NotificationListContainer = (props) => {
  const { isAdmin } = props;
  const [cookies] = useCookies(["token"]);

  const [page, setPage] = useState(1);
  const [adminNotiListData, setAdminNotiListData] = useState([]);
  const [notiListData, setNotiListData] = useState([]);

  // 관리자 승인요청 온 게임 목록보기 GET
  useEffect(() => {
    const getAdminNotiListData = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/admin/game/request`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.token}`,
        },
      });

      const result = await response.json();

      if (response.status === 200) {
        setAdminNotiListData(result.data);
        console.log("result.data: ", result.data);
      } else {
        alert(result.message);
      }
    };

    getAdminNotiListData();
  }, []);

  // 관리자 승인요청 온 게임 목록 백엔드 state가 업데이트 될 때 마다, page를 1 증가시키기
  useEffect(() => {
    setPage(page + 1);
  }, [adminNotiListData]);

  // 일반사용자 알림 목록보기 GET
  useEffect(() => {
    const getNotiListData = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/account/notification`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.token}`,
        },
      });

      const result = await response.json();

      if (response.status === 200) {
        setNotiListData(result.data);
        console.log("result.data: ", result.data);
      } else {
        alert(result.message);
      }
    };

    getNotiListData();
  }, []);

  // 일반사용자 알림 목록 백엔드 state가 업데이트 될 때 마다, page를 1 증가시키기
  useEffect(() => {
    setPage(page + 1);
  }, [notiListData]);

  // 관리자 알림함
  // useEffect(() => {
  //   setAdminNotiListData([
  //     {
  //       id: "Notification_1",
  //       date: "2024.02.29. 11:01",
  //       content: "새로운 게임 “(게임 명)” 생성이 요청되었습니다.",
  //     },
  //     {
  //       id: "Notification_2",
  //       date: "2024.01.29. 11:01",
  //       content: "새로운 게임 “(게임 명)” 생성이 요청되었습니다.",
  //     },
  //     {
  //       id: "Notification_3",
  //       date: "2023.12.29. 11:01",
  //       content: "새로운 게임 “(게임 명)” 생성이 요청되었습니다.",
  //     },
  //   ]);
  // }, []);

  // useEffect(() => {
  //   const scrollDownEvent = () => {
  //     const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  //     if (scrollTop + clientHeight >= scrollHeight) {
  //       addAdminNotiDummyData();
  //     }
  //   };
  //   window.addEventListener("scroll", scrollDownEvent);
  //   return () => {
  //     window.removeEventListener("scroll", scrollDownEvent);
  //   };
  // }, [adminNotiListData]);

  // const addAdminNotiDummyData = () => {
  //   const newData = [
  //     {
  //       id: "Notification_4",
  //       date: "2023.11.29. 11:01",
  //       content: "새로운 게임 “(게임 명)” 생성이 요청되었습니다.",
  //     },
  //     {
  //       id: "Notification_5",
  //       date: "2023.10.29. 11:01",
  //       content: "새로운 게임 “(게임 명)” 생성이 요청되었습니다.",
  //     },
  //     {
  //       id: "Notification_6",
  //       date: "2023.09.29. 11:01",
  //       content: "사용자의 게시글에 새로운 댓글이 달렸습니다. 어서 확인해보세요~!",
  //     },
  //     {
  //       id: "Notification_7",
  //       date: "2023.08.29. 11:01",
  //       content: "새로운 게임 “(게임 명)” 생성이 요청되었습니다.",
  //     },
  //   ];

  //   setAdminNotiListData((prevData) => [...prevData, ...newData]);
  // };

  // 일반 사용자 알림함
  // useEffect(() => {
  //   setNotiListData([
  //     {
  //       id: "Notification_1",
  //       date: "2024.02.29. 11:01",
  //       content: "사용자의 “(게임 명)” 게시글에 새로운 댓글이 달렸습니다. 어서 확인해보세요~!",
  //     },
  //     {
  //       id: "Notification_2",
  //       date: "2024.01.29. 11:01",
  //       content:
  //         "사용자가 작성했던 “(게임 명)” 위키가 다른 사용자에 의해 수정되었습니다. 어떻게 바꼈나 궁금하지 않으세요?",
  //     },
  //     {
  //       id: "Notification_3",
  //       date: "2023.12.29. 11:01",
  //       content: "요청하신 “(게임 명)” 게임 생성이 거절되었습니다..ㅠㅠ ",
  //     },
  //   ]);
  // }, []);

  // useEffect(() => {
  //   const scrollDownEvent = () => {
  //     const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  //     if (scrollTop + clientHeight >= scrollHeight) {
  //       addNotiDummyData();
  //     }
  //   };
  //   window.addEventListener("scroll", scrollDownEvent);
  //   return () => {
  //     window.removeEventListener("scroll", scrollDownEvent);
  //   };
  // }, [notiListData]);

  // const addNotiDummyData = () => {
  //   const newData = [
  //     {
  //       id: "Notification_4",
  //       date: "2023.11.29. 11:01",
  //       content: "사용자의 “(게임 명)” 게시글에 새로운 댓글이 달렸습니다. 어서 확인해보세요~!",
  //     },
  //     {
  //       id: "Notification_5",
  //       date: "2023.10.29. 11:01",
  //       content:
  //         "사용자가 작성했던 “(게임 명)” 위키가 다른 사용자에 의해 수정되었습니다. 어떻게 바꼈나 궁금하지 않으세요?",
  //     },
  //     {
  //       id: "Notification_6",
  //       date: "2023.09.29. 11:01",
  //       content: "요청하신 “(게임 명)” 게임 생성이 거절되었습니다..ㅠㅠ ",
  //     },
  //   ];

  //   setNotiListData((prevData) => [...prevData, ...newData]);
  // };

  return (
    // <OverFlowDiv $height="100%" $flex="v_start_center" $margin="100px 0 0 0" $width="100vw">
    //   {isAdmin ? (
    //     <Div $flex="v_start_center" $width="1320px">
    //       <Div $flex="h_start_center" $width="100%">
    //         <H1 $fontSize="large" $fontWeight="bold">
    //           관리자 알림함
    //         </H1>
    //       </Div>
    //       <NotiListLayout $flex="v_center_center">
    //         {adminNotiListData.length > 0 ? (
    //           adminNotiListData.map((elem) => {
    //             return <NotificationListItem key={elem.id} data={elem} isAdmin />;
    //           })
    //         ) : (
    //           <Div>
    //             <Img src={noAlarmImg} alt="no alarm" />
    //           </Div>
    //         )}
    //       </NotiListLayout>
    //     </Div>
    //   ) : (
    // <Div $flex="v_start_center" $width="1320px">
    //   <Div $flex="h_start_center" $width="100%">
    //     <H1 $fontSize="large" $fontWeight="bold">
    //       알림함
    //     </H1>
    //   </Div>
    //   <NotiListLayout $flex="v_center_center">
    //     {notiListData.length > 0 ? (
    //       notiListData.map((elem) => {
    //         return <NotificationListItem key={elem.id} data={elem} />;
    //       })
    //     ) : (
    //       <Div>
    //         <Img src={noAlarmImg} alt="no alarm" />
    //       </Div>
    //     )}
    //   </NotiListLayout>
    // </Div>
    //   )}
    // </OverFlowDiv>

    // 관리자 알림만 보기
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

    // 일반사용자 알림만 보기
    <Div $flex="v_start_center" $width="1320px">
      <Div $flex="h_start_center" $width="100%">
        <H1 $fontSize="large" $fontWeight="bold">
          알림함
        </H1>
      </Div>
      <NotiListLayout $flex="v_center_center">
        {notiListData.map((elem) => {
          return <NotificationListItem key={elem.id} data={elem} />;
        })}
      </NotiListLayout>
    </Div>
  );
};

export default NotificationListContainer;

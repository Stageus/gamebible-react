import React from "react";
import { Div, Section } from "../../style/LayoutStyle";
import { H1 } from "../../style/TextStyle";
import NotificationListItem from "../../component/NotificationListItem";

const NotificationListContainer = (props) => {
  const { isAdmin } = props;

  const AdminNotificationListData = [
    {
      id: "Notification_1",
      date: "2024.02.29. 11:01",
      content: "새로운 게임 “(게임 명)” 생성이 요청되었습니다.",
    },
    {
      id: "Notification_2",
      date: "2024.01.29. 11:01",
      content: "새로운 게임 “(게임 명)” 생성이 요청되었습니다.",
    },
    {
      id: "Notification_3",
      date: "2023.12.29. 11:01",
      content: "새로운 게임 “(게임 명)” 생성이 요청되었습니다.",
    },
    {
      id: "Notification_4",
      date: "2023.11.29. 11:01",
      content: "새로운 게임 “(게임 명)” 생성이 요청되었습니다.",
    },
    {
      id: "Notification_5",
      date: "2023.10.29. 11:01",
      content: "새로운 게임 “(게임 명)” 생성이 요청되었습니다.",
    },
    {
      id: "Notification_6",
      date: "2023.09.29. 11:01",
      content: "사용자의 게시글에 새로운 댓글이 달렸습니다. 어서 확인해보세요~!",
    },
    {
      id: "Notification_7",
      date: "2023.08.29. 11:01",
      content: "새로운 게임 “(게임 명)” 생성이 요청되었습니다.",
    },
  ];
  const NotificationListData = [
    {
      id: "Notification_1",
      date: "2024.02.29. 11:01",
      content: "사용자의 게시글에 새로운 댓글이 달렸습니다. 어서 확인해보세요~!",
    },
    {
      id: "Notification_2",
      date: "2024.01.29. 11:01",
      content:
        "사용자가 작성했던 위키가 다른 사용자에 의해 수정되었습니다. 어떻게 바꼈나 궁금하지 않으세요?",
    },
    {
      id: "Notification_3",
      date: "2023.12.29. 11:01",
      content: "요청하신 게임 생성이 거절되었습니다..ㅠㅠ",
    },
    {
      id: "Notification_4",
      date: "2023.11.29. 11:01",
      content: "사용자의 게시글에 새로운 댓글이 달렸습니다. 어서 확인해보세요~!",
    },
    {
      id: "Notification_5",
      date: "2023.10.29. 11:01",
      content:
        "사용자가 작성했던 위키가 다른 사용자에 의해 수정되었습니다. 어떻게 바꼈나 궁금하지 않으세요?",
    },
    {
      id: "Notification_6",
      date: "2023.09.29. 11:01",
      content: "요청하신 게임 생성이 거절되었습니다..ㅠㅠ",
    },
    {
      id: "Notification_7",
      date: "2023.08.29. 11:01",
      content: "사용자의 게시글에 새로운 댓글이 달렸습니다. 어서 확인해보세요~!",
    },
  ];

  return (
    <Section $flex="v_start_center" $margin="100px 0 0 0" $width="100vw">
      {isAdmin ? (
        <Div $flex="v_start_center" $width="1320px">
          <Div $flex="h_start_center" $width="100%">
            <H1 $fontSize="large" $fontWeight="bold">
              관리자 알림함
            </H1>
          </Div>
          {AdminNotificationListData.map((elem) => {
            return <NotificationListItem key={elem.id} data={elem} isAdmin />;
          })}
        </Div>
      ) : (
        <Div $flex="v_start_center" $width="1320px">
          <Div $flex="h_start_center" $width="100%">
            <H1 $fontSize="large" $fontWeight="bold">
              알림함
            </H1>
          </Div>
          {NotificationListData.map((elem) => {
            return <NotificationListItem key={elem.id} data={elem} />;
          })}
        </Div>
      )}
    </Section>
  );
};

export default NotificationListContainer;

// import { React, useState, useEffect } from "react";

// import styled from "styled-components";
// import { Span } from "../style/TextStyle";
// import { Div, Article } from "../style/LayoutStyle";

// import ImgTextBtnUtil from "../util/ImgTextBtnUtil";

// import DeleteIcon from "../img/deleteIcon.svg";
// import RejectIcon from "../img/rejectIcon.svg";
// import ApproveIcon from "../img/approveIcon.svg";

// import { useClick } from "../hook/useClick";
// import GameImgSettingContainer from "../container/inNotificationPage/GameImgSettingContainer";

// import { useCookies } from "react-cookie";

// const BorderStyleArticle = styled(Article)`
//   border-radius: 5px;
// `;

// const NotificationListItem = () => {
//   // const { date, content } = props.data;
//   const { isAdmin } = props;

//   const { click: acceptGame, ClickEvent: setGameImgEvent } = useClick(false);

//   const [cookies] = useCookies("token");

//   // // (일반사용자) 알림 삭제하기 DELETE
//   // const deleteAlarmEvent = async () => {
//   //   const response = await fetch(
//   //     `${process.env.REACT_APP_API_KEY}/account/notification/${notificationId}`,
//   //     {
//   //       method: "DELETE",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //         Authorization: `Bearer ${cookies.token}`,
//   //       },
//   //     }
//   //   );
//   //   const result = await response.json();
//   //   if (response.status === 400) {
//   //     alert(result.message);
//   //   } else if (response.status === 401) {
//   //     alert(result.message);
//   //   } else if (response.status === 500) {
//   //     alert(result.message);
//   //   }
//   // };

//   // // (관리자) 게임 승인요청 거부하기 DELETE
//   // const rejectRequestEvent = async () => {
//   //   const response = await fetch(
//   //     `${process.env.REACT_APP_API_KEY}/admin/game/request/${requestIdx}`,
//   //     {
//   //       method: "DELETE",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //         Authorization: `Bearer ${cookies.token}`,
//   //       },
//   //     }
//   //   );

//   //   const result = await response.json();
//   //   if (response.status === 400) {
//   //     alert(result.message);
//   //   } else if (response.status === 401) {
//   //     alert(result.message);
//   //   } else if (response.status === 500) {
//   //     alert(result.message);
//   //   }
//   // };

//   return (
//     <Div $flex="v_start_start" $width="100%" $margin="70px 0 0 0">
//       <Span $margin="0 0 10px 0">{createdAt}</Span>
//       <BorderStyleArticle
//         $flex="h_between_center"
//         $width="100%"
//         $backgroundColor="lightGray"
//         $height="100px"
//         $padding="0 3%"
//       >
//         <Div>
//           <Span $fontWeight="bold">{title}</Span>
//         </Div>
//         {isAdmin ? (
//           // (관리자) 알람 하나
//           <Div $flex="h_between_center" $width="30%">
//             <ImgTextBtnUtil
//               key="Reject"
//               img={RejectIcon}
//               text="REJECT"
//               color="major"
//               backgroundColor="default"
//               onClick={() => rejectRequestEvent(requestIdx)}
//             />
//             <ImgTextBtnUtil
//               key="Approve"
//               img={ApproveIcon}
//               text="APPROVE"
//               color="major"
//               backgroundColor="default"
//               onClick={setGameImgEvent}
//             />
//           </Div>
//         ) : (
//           // (일반사용자) 알람 하나
//           <ImgTextBtnUtil
//             img={DeleteIcon}
//             text="DELETE"
//             color="major"
//             backgroundColor="default"
//             onClick={() => deleteAlarmEvent(notificationId)}
//           />
//         )}
//       </BorderStyleArticle>
//       {acceptGame && <GameImgSettingContainer {...{ setGameImgEvent }} />}
//     </Div>
//   );
// };

// export default NotificationListItem;

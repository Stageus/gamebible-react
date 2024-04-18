# 🎮 게임대장경 GameBible 📚

## 💁 프로젝트 소개 
게임 관련 위키 및 커뮤니티 제공 서비스 웹


## ⏰ 프로젝트 진행 기간 
* 기획 및 디자인: 2024.02.08 - 2024.02.29
* 개발: 2024.02.29 - 2024.04.18


## 🤼‍♀️ 팀원 소개 Team Members
|__조경은__|__방준연__|__김기주__|__박해주__|__정태은__|
|---|---|---|---|---|
|[@KyoungEun-creator](https://github.com/KyoungEun-creator)|[@hizz1008](https://github.com/hizz1008)|[@k1ju](https://github.com/k1ju)|[@gown0930](https://github.com/gown0930)|[@nundung](https://github.com/nundung)|

* __조경은__: PM, 프론트엔드 개발, UX/UI 디자인
* __방준연__: 프론트엔드 개발, UX/UI 디자인
* __김기주__: 백엔드 PL, 백엔드 개발
* __박해주__: 백엔드 개발
* __정태은__: 백엔드 개발



## 🛠️ Stack

#### Environment: 

<img src="https://img.shields.io/badge/Visual Studio Code-1D88EB?style=flat-square&logo=visualstudiocode&logoColor=white" /> <img src="https://img.shields.io/badge/Git-EA402D?style=flat-square&logo=git&logoColor=white" /> <img src="https://img.shields.io/badge/Github-02050A?style=flat-square&logo=github&logoColor=white" />

#### Communication: 

<a href="https://stageus.notion.site/de6ca2e84dce43bdacde52179a81cefc?pvs=4"><img src="https://img.shields.io/badge/Notion-FFCA28?style=flat-square&logo=notion&logoColor=black" /></a> <a href="https://docs.google.com/presentation/d/1-A-lOpx6OpmWgfMeLjRfDR_3OcTO5UOFRWMvdYztRjw/edit?usp=sharing"><img src="https://img.shields.io/badge/Google Sheets-2D9C41?style=flat-square&logo=googleslides&logoColor=white" /></a> <a href="https://docs.google.com/presentation/d/1-A-lOpx6OpmWgfMeLjRfDR_3OcTO5UOFRWMvdYztRjw/edit?usp=sharing"><img src="https://img.shields.io/badge/Google Slides-EEA708?style=flat-square&logo=googleslides&logoColor=white" /></a> 

#### Design: 
<a href="https://www.figma.com/file/0qRGzr0ozV448yVJ7D71EG/%EA%B2%8C%EC%9E%84%EB%8C%80%EC%9E%A5%EA%B2%BD?type=design&node-id=0%3A1&mode=design&t=PuVshXWpiSF2yoNj-1"><img src="https://img.shields.io/badge/figma-FD5950?style=flat-square&logo=figma&logoColor=white" /></a> 

#### FrontEnd: 
<img src="https://img.shields.io/badge/javascript-F6DC22?style=flat-square&logo=javascript&logoColor=white" /> <img src="https://img.shields.io/badge/react-59D4FA?style=flat-square&logo=react&logoColor=white" /> <img src="https://img.shields.io/badge/StyledComponent-CE6CBE?style=flat-square&logo=styled component&logoColor=white" /> <img src="https://img.shields.io/badge/Recoil-2A5FDE?style=flat-square&logo=recoil&logoColor=white" />
  
#### BackEnd: 
<img src="https://img.shields.io/badge/nodeJS-7DBF15?style=flat-square&logo=nodeJS&logoColor=white" /> 

#### Database: 



## 🖼️ 화면 구성 Pages
|__메인 페이지__|__위키 페이지__|
|---|---|

|__위키 히스토리 목록 페이지__|__위키 히스토리 상세보기 페이지__|
|---|---|

|__커뮤니티 페이지__|__게시글 상세보기 페이지__|
|---|---|

|__관리자 알람 페이지__|__일반사용자 알람 페이지__|
|---|---|

|__회원가입 페이지__|__로그인 페이지__|
|---|---|

## 💡 주요 기능 Main Functions
#### ✨ 아직 제공하지 않는 게임 생성 제안 기능
* 주어진 조건에 맞는 게임명 입력을 통한 생성 제안
  
#### ✨ 각 게임 당 하나의 위키에 대한 누적 수정 기능
* 하나의 위키에 대한 수정 내역 확인 가능
* 각 사용자가 수정한 내용 확인 가능
  
#### ✨ 게시글 작성 및 댓글 작성 기능
* 

#### ✨ 관리자 여부에 따른 알람 확인 기능
* 




## 🗂️ 폴더 구조 Architecture
```
├── App.js
├── component
│   ├── AddPhotoBtnItem.js
│   ├── AdminNotificationListItem.js
│   ├── BannerImgItem.js
│   ├── CommentListItem.js
│   ├── FooterItem.js
│   ├── GameListItem.js
│   ├── HeaderItem.js
│   ├── ImgTextBtnItem.js
│   ├── InputItem.js
│   ├── LabelText.js
│   ├── NotificationListItem.js
│   ├── PostListItem.js
│   └── ThumbnailItem.js
├── container
│   ├── AddPhotoBtnContainer.js
│   ├── GameListNavContainer.js
│   ├── HeaderNavContainer.js
│   ├── Kakao.js
│   ├── PaginationContainer.js
│   ├── inChangePWPage
│   │   └── ChangePWContainer.js
│   ├── inCommunityPage
│   │   ├── CommunityContainer.js
│   │   └── PostListContainer.js
│   ├── inEditPersonalInfoPage
│   │   └── EditPersonalInfoContainer.js
│   ├── inEditWikiPage
│   │   ├── EditWikiContainer.js
│   │   └── EditingContainer.js
│   ├── inFindIDPage
│   │   └── FindIDContainer.js
│   ├── inMainPage
│   │   └── PopularGameListContainer.js
│   ├── inNotificationPage
│   │   ├── AdminNotificationListContainer.js
│   │   ├── GameImgSettingContainer.js
│   │   └── NotificationListContainer.js
│   ├── inPersonalInfoPage
│   │   └── PersonalInfoContainer.js
│   ├── inReadPostPage
│   │   ├── CommentContainer.js
│   │   ├── CommentListContainer.js
│   │   ├── DeletePostContainer.js
│   │   ├── PostCommentContainer.js
│   │   ├── PostDetailViewContainer.js
│   │   └── ReadPostContainer.js
│   ├── inResetPWPage
│   │   └── ResetPWContainer.js
│   ├── inSearchResultsPage
│   │   ├── NoResultNoGameContainer.js
│   │   ├── SearchResultGameContainer.js
│   │   ├── SearchResultPostContainer.js
│   │   ├── SuggestGameContainer.js
│   │   ├── YesGameContainer.js
│   │   └── YesPostContainer.js
│   ├── inSignInPage
│   │   ├── SignInContainer.js
│   │   └── SocialSignInBtnContainer.js
│   ├── inSignUpPage
│   │   ├── EmailAuthInputContainer.js
│   │   ├── EmailInputContainer.js
│   │   ├── IdInputContainer.js
│   │   ├── NicknameInputContainer.js
│   │   ├── PrivacyDetailViewContainer.js
│   │   ├── SignUpContainer.js
│   │   ├── TermsDetailViewContainer.js
│   │   └── TermsServiceContainer.js
│   ├── inWikiPage
│   │   ├── WikiContainer.js
│   │   ├── WikiHistoryContentContainer.js
│   │   └── WikiHistoryListContainer.js
│   └── inWritePostPage
│       ├── WritePostContainer.js
│       └── WriterContainer.js
├── hook
│   ├── useClick.js
│   ├── useFetch.js
│   ├── useHover.js
│   └── useInput.js
├── img
│   ├── HeaderLogo.svg
│   ├── addGameImg.svg
│   ├── addPhotoImg.svg
│   ├── approveIcon.svg
│   ├── arrowLeft.svg
│   ├── arrowRight.svg
│   ├── backImg.svg
│   ├── bannerImg.svg
│   ├── deleteIcon.svg
│   ├── deleteImg.svg
│   ├── doneAll.svg
│   ├── editImg.svg
│   ├── emailImg.svg
│   ├── finishImg.svg
│   ├── footerLogoImg.svg
│   ├── githubImg.svg
│   ├── historyImg.svg
│   ├── kakaoLoginMediumWide.svg
│   ├── menuIcon.svg
│   ├── noAlarmImg.svg
│   ├── noGameImg.svg
│   ├── noPostImg.svg
│   ├── notiIcon.svg
│   ├── notionImg.svg
│   ├── putByUserImg.svg
│   ├── radioBtnChecked.svg
│   ├── radioBtnUnChecked.svg
│   ├── rejectIcon.svg
│   ├── searchIcon.svg
│   ├── testPostImg.png
│   ├── thumnailTextImg.svg
│   ├── unVisibleIcon.svg
│   ├── userIcon.svg
│   └── visibleIcon.svg
├── index.js
├── page
│   ├── AccessDeniedPage.js
│   ├── ChangePWPage.js
│   ├── CommunityPage.js
│   ├── EditPersonalInfoPage.js
│   ├── EditWikiPage.js
│   ├── FindIDPage.js
│   ├── MainPage.js
│   ├── NotificationPage.js
│   ├── PersonalInfoPage.js
│   ├── ReadPostPage.js
│   ├── ResetPWPage.js
│   ├── SearchResultsPage.js
│   ├── SignInPage.js
│   ├── SignUpPage.js
│   ├── WikiHistoryContentPage.js
│   ├── WikiHistoryPage.js
│   ├── WikiPage.js
│   └── WritePostPage.js
├── recoil
│   ├── navToggleAtom.js
│   └── userInfoAtom.js
├── routes
│   ├── PrivateRouter.js
│   └── PublicRouter.js
├── style
│   ├── ButtonStyle.js
│   ├── GlobalStyle.js
│   ├── ImgStyle.js
│   ├── InputStyle.js
│   ├── LayoutStyle.js
│   ├── SetStyle.js
│   └── TextStyle.js
└── util
    ├── TimeStampUtil.js
    └── ValidationUtil.js

25 directories, 130 files
```

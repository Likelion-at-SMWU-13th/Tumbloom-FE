# Tumbloom-FE
멋쟁이사자처럼 중앙해커톤 '텀블룸'팀의 프론트엔드 레포지토리입니다.

---

# 🌱 Tumblerin

<img width="5760" height="3240" alt="KakaoTalk_Photo_2025-08-25-19-58-33" src="https://github.com/user-attachments/assets/b184760a-764a-4b0b-b512-d6ce3d2cd9b9" />

## 🚀 Project Introduction
> **Tumblerin (텀블러인)**  
환경을 생각하는 텀블러 이용 문화를 확산하기 위해 제작된 서비스입니다.  
사용자는 카페를 방문해 본인의 텀블러를 인증하고, 혜택 및 포인트를 적립할 수 있습니다.

---

## 🛠 Tech Stack

<div align="center">

### Frontend
<!-- Frontend -->
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-FFD700?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### Backend
<!-- Backend -->
![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)

### Infra
<!-- Infra -->
![AWS](https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![GoogleCloud](https://img.shields.io/badge/Google%20Cloud-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)

### Tools
<!-- Tools -->
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)

</div>

---

## 📂 Repository Structure
- **Backend**: [`Tumbloom-BE`](https://github.com/Likelion-at-SMWU-13th/Tumbloom-BE.git)  
- **Frontend**: [`Tumbloom-FE`](https://github.com/Likelion-at-SMWU-13th/Tumbloom-FE.git)  
- **Server**: [`https://tumbloom.store/`](https://tumbloom.store)  
- **Client**: [`https://tumbloom-fe.vercel.app`](https://tumbloom-fe.vercel.app)  

---

## 🤝 Contributors
<br>

| 이름     | 개발분야  | 개인 레포                                         | 역할                    |
| -------- | --------- | ------------------------------------------------- | ------------------------- |
| 🦁이승채 | Front-end | [chootkuri](https://github.com/chootkuri)  | 알아서 | 
| 🦁이채빈 | Front-end | [chaebin1207](https://github.com/chaebin1207)  | 정리 |

<br/>

---
## 🗂️ 프로젝트 구조

```
📦 
├─ .github
│  ├─ ISSUE_TEMPLATE
│  │  └─ tumbloom-issue-template.md
│  └─ PULL_REQUEST_TEMPLATE.md
├─ .gitignore
├─ .prettierrc
├─ README.md
├─ eslint.config.js
├─ index.html
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ icons
│  │  └─ images
│  ├─ components
│  │  ├─ Button
│  │  │  ├─ RegisterBtn.Styled.js
│  │  │  └─ RegisterBtn.jsx
│  │  ├─ CafeInfo
│  │  │  ├─ CafeInfoBox.jsx
│  │  │  └─ MenuBox.jsx
│  │  ├─ CafeList
│  │  │  └─ CafeList.Styled.js
│  │  ├─ Coupon
│  │  │  ├─ CafeCoupon.jsx
│  │  │  ├─ CafeInputField.jsx
│  │  │  ├─ CouponChange.jsx
│  │  │  ├─ CouponHeader.jsx
│  │  │  ├─ CouponPrev.jsx
│  │  │  ├─ MyCoupon.jsx
│  │  │  └─ styled.js
│  │  ├─ CouponUse
│  │  │  ├─ CouponUse.jsx
│  │  │  └─ styled.js
│  │  ├─ FavoriteCafeList
│  │  │  ├─ FavoriteCafeList.jsx
│  │  │  └─ styled.js
│  │  ├─ Home
│  │  │  ├─ CafeCard.jsx
│  │  │  ├─ CafeCarousel.jsx
│  │  │  ├─ CafeRecommend.jsx
│  │  │  ├─ FilterTap.jsx
│  │  │  ├─ HeaderArea.jsx
│  │  │  ├─ MatrixBar.jsx
│  │  │  ├─ MatrixChip.jsx
│  │  │  ├─ PreferenceCard.jsx
│  │  │  ├─ StampArea.jsx
│  │  │  ├─ StampComplete.jsx
│  │  │  ├─ TapBtn.jsx
│  │  │  ├─ TumblerInfo.jsx
│  │  │  └─ styled.js
│  │  ├─ Map
│  │  │  ├─ KakaoMap.jsx
│  │  │  ├─ MapBtn.jsx
│  │  │  ├─ MapCafeCard.jsx
│  │  │  └─ SearchBox.jsx
│  │  ├─ MyPage
│  │  │  ├─ LevelModal.jsx
│  │  │  ├─ MyPageBox.jsx
│  │  │  ├─ ProfileContent.jsx
│  │  │  ├─ ProfileInfo.jsx
│  │  │  ├─ StateBar.jsx
│  │  │  └─ styled.js
│  │  ├─ Preference
│  │  │  ├─ Button.jsx
│  │  │  ├─ ChoosePreference.jsx
│  │  │  └─ styled.js
│  │  ├─ ProfileShare
│  │  │  ├─ ProfileCard.jsx
│  │  │  ├─ ProfileShareBox.jsx
│  │  │  └─ styled.js
│  │  ├─ common
│  │  │  ├─ CafeListCard.Styled.js
│  │  │  ├─ CafeListCard.jsx
│  │  │  ├─ Footer.Styled.js
│  │  │  ├─ Footer.jsx
│  │  │  ├─ Header.Styled.js
│  │  │  ├─ Header.jsx
│  │  │  ├─ Input.Styled.js
│  │  │  ├─ Input.jsx
│  │  │  ├─ NavItem.Styled.js
│  │  │  ├─ NavItem.jsx
│  │  │  ├─ NoData.Styled.js
│  │  │  ├─ NoData.jsx
│  │  │  ├─ NoticeModal.Styled.js
│  │  │  ├─ NoticeModal.jsx
│  │  │  ├─ PwdInputField.Styled.js
│  │  │  └─ PwdInputField.jsx
│  │  ├─ getStamp
│  │  │  ├─ GetStamp.Styled.js
│  │  │  └─ StampAccess.Styled.js
│  │  ├─ onboarding
│  │  │  └─ Splash.Styled.js
│  │  └─ signup
│  │     └─ SignUp.Styled.js
│  ├─ font
│  │  └─ woff2
│  │     └─ PretendardVariable.woff2
│  ├─ index.css
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ CafeDetail.jsx
│  │  ├─ CafeList.jsx
│  │  ├─ Coupon.jsx
│  │  ├─ CouponDetailPage.jsx
│  │  ├─ FavoriteCafe.jsx
│  │  ├─ GetStamp.jsx
│  │  ├─ HomePage.jsx
│  │  ├─ Login.jsx
│  │  ├─ Map.jsx
│  │  ├─ MyPage.jsx
│  │  ├─ OnBoarding.jsx
│  │  ├─ Preference.jsx
│  │  ├─ ProfileShare.jsx
│  │  ├─ QrScan.jsx
│  │  ├─ SignUp.jsx
│  │  ├─ Splash.jsx
│  │  └─ StampAccess.jsx
│  └─ router.jsx
├─ vercel.json
└─ vite.config.js
```
©generated by [Project Tree Generator](https://woochanleee.github.io/project-tree-generator)

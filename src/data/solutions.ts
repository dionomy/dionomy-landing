export interface Solution {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  lead: string;
  points: string[];
}

export const solutionsHeading =
  "모든 운영을 하나로 모으고, \n 모든 데이터를 편하게 관리하세요.";
export const solutionsLead =
  "Dionomy는 스튜디오 운영에 필요한 여러 기능을 하나의 앱으로 통합하여, 원장님과 강사님이 수강생과 수업 관리에 집중할 수 있도록 돕습니다. \n 매출·출석·수강권 현황은 백오피스에서 한눈에, AI 분석으로 더 전문적인 스튜디오 운영을 시작하세요.";

export const solutions: Solution[] = [
  {
    id: "hub",
    number: "01",
    eyebrow: "통합 운영 허브",
    title: "일정·잔여·결제·노트·공지를\n우리 스튜디오 앱에서 한 번에",
    lead: "복잡한 일정 관리를 앱에서 간편하게 해결하세요.",
    points: [
      "일정 변경 → 잔여 횟수 자동 차감·복구",
      "자동으로 재등록 일정 반영",
      "수업 노트 · 공지 · 결제까지 한 채널에서",
    ],
  },
  {
    id: "whitelabel",
    number: "02",
    eyebrow: "우리 스튜디오만의 어플",
    title: "로고만 넣으면,\n우리 스튜디오 전용 앱.",
    lead: "스튜디오 로고를 넣고 우리만의 어플을 만드세요. \n기능도 우리 스튜디오에 맞게 커스텀할 수 있습니다.",
    points: [
      "우리 스튜디오만의 어플",
      "회원권·연습실·차감 규칙까지 우리 스튜디오에 맞게",
      "원장님이 직접 설정, 변경 가능",
    ],
  },
  {
    id: "ai-crm",
    number: "03",
    eyebrow: "AI 통합 관리 대시보드",
    title: "이번 주에 챙겨야 할 수강생을\n먼저 알려드립니다.",
    lead: "앱에 쌓인 모든 데이터가 관리자 대시보드에서 통계로 한눈에 정리됩니다. \nAI로 더 전문적인 스튜디오 관리를 시작하세요.",
    points: [
      "관리자 대시보드에서 매출·출석·수강권 통계를 한눈에",
      "학생별 진도 관리, 이탈 위험 감지, 맞춤형 솔루션 제안",
      "AI로 더 체계적인, 더 편한 스튜디오 관리",
    ],
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  body: string;
}

export const processHeading = "시작은 신청 한 번이면 충분합니다.";
export const processLead =
  "복잡한 세팅은 Dionomy가 해드립니다. 원장님의 목소리를 들려주세요.";

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "상담 · 온보딩",
    body: "스튜디오 운영 방식을 함께 정리합니다. 회원권 정책과 차감 규칙을 그대로 옮겨 담습니다.",
  },
  {
    step: "02",
    title: "전용 앱 생성",
    body: "로고와 테마를 입힌 우리 스튜디오 전용 앱을 만들고, App Store와 Play Store에 등록하세요.",
  },
  {
    step: "03",
    title: "운영 데이터 축적",
    body: "일정·출석·결제·수강권이 한 곳에 쌓입니다. 흩어진 관리가 사라집니다.",
  },
  {
    step: "04",
    title: "AI 케어 시작",
    body: "데이터가 쌓이면 AI가 이탈 신호를 읽기 시작합니다. 매주 챙길 수강생을 먼저 알려드립니다.",
  },
];

export interface ProblemStep {
  index: string;
  title: string;
  body: string;
}

// "조용한 이탈(silent churn)" — 랜딩 전체를 관통하는 감정적 훅
export const problemEyebrow = "조용한 이탈";
export const problemHeading =
  "수강생은 떠나기 전에\n작별 인사를 하지 않습니다.";
export const problemLead =
  "성인 수강생은 본업과 약속 때문에 일정을 자주 바꿉니다. \n그 작은 어긋남이 쌓이는 동안, 원장님은 아무 신호도 받지 못합니다.";

export const problemSteps: ProblemStep[] = [
  {
    index: "01",
    title: "수업은 카톡·엑셀·캘린더에 흩어집니다",
    body: "일정 변경 요청은 카톡으로, 잔여 횟수는 엑셀로, 강사 스케줄은 구글 캘린더로. 채널을 오가며 손으로 맞추다 보면 어딘가는 반드시 어긋납니다.",
  },
  {
    index: "02",
    title: "재등록 안내 타이밍을 놓칩니다",
    body: "수강권을 다 쓴 그 순간이 가장 중요하지만, 바쁜 운영 속에서 안내 한 번을 놓치면 아무 대화 없이 관계가 흐려집니다.",
  },
  {
    index: "03",
    title: "수업 간격이 벌어지고, 흐름이 끊깁니다",
    body: "수업 흐름이 끊기면 수강생의 만족도는 떨어지게 됩니다. 결국, 수강생은 어느 순간 발길을 끊습니다.",
  },
];

# dionomy 랜딩페이지

성인 취미 스튜디오(악기·댄스·드로잉·베이킹 등)를 위한 **스튜디오 전용 앱 dionomy**의 B2B 랜딩페이지.
단일 목표는 스튜디오 운영자가 **"무료 얼리어답터 신청"** CTA를 눌러 신청 폼을 제출하게 하는 것이며,
**"조용한 이탈(silent churn)"** 을 감정적 훅으로, **AI 이탈 신호 CRM**을 핵심 가치로 내세웁니다.

## 기술 스택

- **[Astro 5](https://astro.build)** — 정적 마케팅 페이지, 기본 zero-JS
- **[Tailwind CSS v4](https://tailwindcss.com)** — `@tailwindcss/vite` 플러그인 + CSS-first `@theme` 토큰
- **[Pretendard](https://github.com/orioncactus/pretendard)** — self-host(가변 폰트 · unicode-range 다이내믹 서브셋)
- 인터랙션은 프레임워크 없이 바닐라 `<script>`로 처리 (화이트라벨 테마 데모, 신청 폼, GA 추적)
- **GA4** 익명 통계 — 프로덕션 빌드 + `PUBLIC_GA_ID`가 있을 때만 로드(`Analytics.astro`)

## 개발

```bash
pnpm install
pnpm dev        # 개발 서버 (http://localhost:4321)
pnpm build      # 정적 빌드 → dist/
pnpm preview    # 빌드 결과 미리보기

pnpm lint       # astro check(타입·템플릿) + eslint(코드품질)
pnpm lint:fix   # eslint 자동 수정
pnpm format     # prettier --write
```

> pnpm v11 사용. 네이티브 빌드 승인(esbuild·sharp)은 `pnpm-workspace.yaml`의 `allowBuilds`에서 관리합니다.

정적 호스팅(Vercel/Netlify/Cloudflare Pages)에 `dist/`를 그대로 배포합니다.

## 환경변수

`.env`(또는 호스팅 환경변수)로 주입. 모두 선택값이며, 없으면 안전하게 비활성화됩니다.

| 변수 | 용도 | 미설정 시 |
|---|---|---|
| `PUBLIC_FORM_ENDPOINT` | 신청 폼 POST 대상(Formspree/Tally/자체 API) | 콘솔 스텁으로 성공 처리(로컬 개발용) |
| `PUBLIC_GA_ID` | GA4 측정 ID | GA 스크립트 미로드 |

## 구조

```
src/
├─ data/            # 섹션 카피·리스트 데이터 (수정은 대부분 여기서)
│  ├─ site.ts          사이트 메타/SEO/OG (name · url · email · ogImage)
│  ├─ navigation.ts    내비 링크
│  ├─ problem.ts       조용한 이탈 3스텝
│  ├─ solutions.ts     핵심 3솔루션 카피
│  ├─ care.ts          AI 케어 카드(이번 주 챙길 수강생)
│  ├─ process.ts       도입 흐름
│  ├─ pricing.ts       요금/얼리어답터 배너
│  └─ categories.ts    신청 폼 카테고리 + 클로징 카피
├─ styles/global.css   디자인 토큰(@theme) · 베이스 · 유틸
├─ layouts/BaseLayout.astro   head/SEO/OG/JSON-LD · 폰트 · 스크롤 리빌
├─ components/
│  ├─ ui/              Button · Eyebrow · CheckList · CheckIcon · Multiline · SectionHeader
│  ├─ Nav · Hero · Problem
│  ├─ Solutions(→ SolutionHub · SolutionWhitelabel · SolutionAiCrm), SolutionCopy 공유 카피 블록
│  ├─ Process · Pricing · FinalCta · Footer
│  └─ Analytics.astro  GA4 로더 + CTA 클릭·섹션 노출 추적(프로덕션 한정)
└─ pages/index.astro   단일 페이지 조립
                       Nav → Hero → Solutions → Problem → Process → Pricing → FinalCta → Footer
```

## 디자인 토큰

2-tier 시맨틱 구조 — primitive 팔레트(`--color-primary-*`, `--color-ink-*`) →
시맨틱 역할(`brand` / `fg` / `bg` / `border` / `signal-*`). 컴포넌트는 시맨틱 토큰만 참조.
메인 브랜드 컬러는 iris-indigo **`#5b5bd6`** (primary-600).

## 남은 TODO

- [ ] **신청 폼 백엔드** — 코드는 `PUBLIC_FORM_ENDPOINT`로 POST하도록 연결 완료.
      프로덕션에서 실제 엔드포인트(Formspree/Tally/자체 API) 발급 후 env에 주입만 하면 됨.
      미설정 시 `FinalCta.astro`가 콘솔 스텁으로 성공 처리.
- [ ] **정식 도메인 교체** — 런칭 시 `astro.config.mjs`의 `site`와 `src/data/site.ts`의 `url`을
      스테이징(`dionomy-landing.nangmans.com`) → `dionomy.app`로 교체.
- [x] OG 이미지 — `public/og_image-v3.png` (1200×630) 적용 완료.
- [x] 문의 이메일 — `contact@nangmans.com` 설정 완료.
- [x] Pretendard self-host (다이내믹 서브셋 적용 완료).

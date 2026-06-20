// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // 정식 도메인(dionomy.app) 배포 전까지는 스테이징 도메인으로 인덱싱.
  // canonical·og:url·og:image·sitemap 절대경로가 이 값에서 생성됨 → 런칭 시 dionomy.app로 교체.
  site: "https://dionomy-landing.nangmans.com",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

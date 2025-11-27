import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Auto-detect base for GitHub Pages (project pages vs user/org pages)
const repo = process.env.GITHUB_REPOSITORY; // e.g. "user/repo" on Actions, undefined locally
const isUserOrOrgPage = repo?.endsWith(".github.io") ?? false;
const base = isUserOrOrgPage ? "/" : repo ? `/${repo.split("/")[1]}/` : "/";

export default defineConfig({
    plugins: [react()],
    base, // keeps your user-page / project-page support
    build: {
        outDir: "dist", // 👈 new: put the built site into /docs
    },
});

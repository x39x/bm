import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async () => {
    // 从 src/bm 目录加载所有 JSON 文件
    const modules = import.meta.glob("../bm/*.json", { eager: true });

    // 提取文件名作为 slug
    let slugs = Object.keys(modules)
        .map((path) => path.split("/").pop()?.replace(".json", ""))
        .filter(Boolean) as string[];

    // 确保 Home 在第一位
    slugs = slugs.filter((s) => !["Home", "Dev", "p"].includes(s));
    slugs.unshift("Dev");
    slugs.unshift("Home");

    // Return to layout.svelte
    return { slugs };
};

export const prerender = true;

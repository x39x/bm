import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
    const slug = params.bm;

    // load src/bm/*.json
    const modules = import.meta.glob("../../bm/*.json", {
        eager: true,
    }) as Record<string, any>;
    const expectedPath = `../../bm/${slug}.json`;
    // 尝试直接按路径 load
    let mod = modules[expectedPath];

    // 模块可能是 { default: { ... } }，也可能是直接对象（取决于打包器）
    const data = mod.default ?? mod;
    return { links: data as Record<string, { url: string; dsc: string }[]> };
};

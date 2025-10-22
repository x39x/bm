import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
    const slug = params.bm;

    // load src/bm/*.json
    const modules = import.meta.glob("../../bm/*.json", {
        eager: true,
    }) as Record<string, any>;
    const expectedPath = `../../bm/${slug}.json`;
    // load
    let mod = modules[expectedPath];

    //  vite 返回 { default: { ... } }
    const data = mod.default;
    return { links: data as Record<string, { url: string; dsc: string }[]> };
};

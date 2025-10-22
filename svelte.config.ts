import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import type { Config } from "@sveltejs/kit";

const config: Config = {
    // 使用 Vite 的预处理器
    preprocess: vitePreprocess(),

    kit: {
        //NOTE: https://svelte.dev/docs/kit/adapter-static
        adapter: adapter({
            precompress: false,
            strict: true,
        }),
    },
};

export default config;

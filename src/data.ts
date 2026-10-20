import { marked } from "marked";

function escapeHtml(s: string): string {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

// process link
const renderer = new marked.Renderer();
renderer.link = function ({ href, title, text }) {
    const titleAttr = title ? ` title="${escapeHtml(title)}"` : "";
    const external = /^https?:\/\//.test(href);
    const extra = external ? ' target="_blank" rel="noopener noreferrer"' : "";

    return `<a href="${escapeHtml(href)}"${titleAttr}${extra}>${text}</a>`;
};

// render
async function renderPage(md: string): Promise<string> {
    return marked.parse(md, { renderer });
}

// get all md file
const modules = import.meta.glob("./bm/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
}) as Record<string, string>;

// slug/pages
const pages: Record<string, string> = {};
for (const [path, raw] of Object.entries(modules)) {
    const slug = path.split("/").pop()?.replace(/\.md$/, "") ?? "";
    pages[slug] = await renderPage(raw);
}

export const slugs = (() => {
    const excluded = new Set(["home", "dev", "p"]);
    const list = Object.keys(pages)
        .filter((s) => !excluded.has(s.toLowerCase()))
        .map((s) => s[0].toUpperCase() + s.slice(1));

    return ["Home", "Dev", ...new Set(list)];
})();

export const getData = (slug: string): string => pages[slug] ?? "";

import { A } from "@solidjs/router";
import { For } from "solid-js";
import type { ParentComponent } from "solid-js";

const modules = import.meta.glob("./bm/*.json", { eager: true });

const slugs = (() => {
    const excluded = new Set(["home", "dev", "p"]);

    const list = Object.keys(modules)
        .map((path) =>
            path
                .split("/")
                .pop()
                ?.replace(/\.json$/, ""),
        )
        .filter((s): s is string => !!s)
        .filter((s) => !excluded.has(s.toLowerCase()))
        .map((s) => s[0].toUpperCase() + s.slice(1));

    return ["Home", "Dev", ...new Set(list)];
})();

const Layout: ParentComponent = (props) => {
    return (
        <div style={{ display: "flex" }}>
            <nav class="navbar">
                <div style={{ display: "flex", "flex-direction": "column" }}>
                    <For each={slugs}>
                        {(slug) => <A href={`/${slug.toLowerCase()}`}>{slug}</A>}
                    </For>
                </div>
            </nav>

            <main class="content">{props.children}</main>
        </div>
    );
};

export default Layout;

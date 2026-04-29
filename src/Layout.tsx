import { A } from "@solidjs/router";
import { For } from "solid-js";
import type { ParentComponent } from "solid-js";

const modules = import.meta.glob("./bm/*.json", { eager: true });

const slugs = (() => {
    let list = Object.keys(modules)
        .map((path) => path.split("/").pop()?.replace(".json", ""))
        .filter(Boolean) as string[];

    list = list.filter((s) => !["Home", "Dev", "p"].includes(s));
    list = list.map((s) => {
        return s[0].toUpperCase() + s.slice(1);
    });
    list.unshift("Dev");
    list.unshift("Home");

    return list;
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

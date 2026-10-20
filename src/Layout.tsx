import { A } from "@solidjs/router";
import { For } from "solid-js";
import type { ParentComponent } from "solid-js";

import { slugs } from "./data";

const Layout: ParentComponent = (props) => (
    <>
        <nav class="navbar">
            <For each={slugs}>
                {(slug) => <A href={`/${slug.toLowerCase()}`}>{slug}</A>}
            </For>
        </nav>

        <main class="content">{props.children}</main>
    </>
);

export default Layout;

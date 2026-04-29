import { useParams, A } from "@solidjs/router";
import type { Component } from "solid-js";
import { For } from "solid-js";

type LinkItem = {
    url: string;
    dsc: string;
};

type LinkData = Record<string, LinkItem[]>;

const modules = import.meta.glob<{ default: LinkData }>("./bm/*.json", {
    eager: true,
});

const getData = (slug: string): LinkData => {
    const expectedPath = `./bm/${slug}.json`;
    const mod = modules[expectedPath];

    return mod?.default ?? {};
};

const Category: Component = () => {
    const params = useParams<{ category: string }>();

    const links = () => getData(params.category ?? "");

    const isExternal = (url: string) => url.startsWith("http://") || url.startsWith("https://");

    return (
        <>
            <For each={Object.entries(links())}>
                {([category, items]) => (
                    <>
                        <h2>{category}</h2>

                        <div>
                            <For each={items}>
                                {(item) => (
                                    <div>
                                        {isExternal(item.url) ? (
                                            <a
                                                href={item.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {item.dsc}
                                            </a>
                                        ) : (
                                            <A href={item.url}>{item.dsc}</A>
                                        )}
                                    </div>
                                )}
                            </For>
                        </div>
                    </>
                )}
            </For>
        </>
    );
};

export default Category;

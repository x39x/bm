import { useParams } from "@solidjs/router";
import type { Component } from "solid-js";

import { getData } from "./data";

const Category: Component = () => {
    const params = useParams<{ category: string }>();
    const html = () => getData(params.category ?? "");
    return <div innerHTML={html()} />;
};

export default Category;

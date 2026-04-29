/* @refresh reload */
import { Router, Route, Navigate } from "@solidjs/router";
import { render } from "solid-js/web";

import Category from "./Category";
import Layout from "./Layout";

import "./styles.css";

//渲染
const wrapper = document.getElementById("root");
render(
    () => (
        <Router root={Layout}>
            <Route path="/" component={() => <Navigate href="/home" />} />
            <Route path="/:category" component={Category} />
        </Router>
    ),
    wrapper!,
);

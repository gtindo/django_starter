import { html } from "lit-html";

import "../components/hello-world";

const story = {
    title: "Components/<hello-world>"
}

export default story;

export const Primary = () => html `<hello-world></hello-world>`;

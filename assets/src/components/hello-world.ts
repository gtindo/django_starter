import { LitElement, html } from "lit";


export class HelloWorld extends LitElement {
    static properties = {
        name: {
            attribute: "name",
            type: String
        }
    }

    name = "";

    render() {
        return html`
            Hello World ${this.name}!
        `
    }
}

customElements.define("hello-world", HelloWorld);

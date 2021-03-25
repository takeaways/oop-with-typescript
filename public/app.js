import PageComponent from "./components/page.js";
export default class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attach(appRoot);
    }
}
new App(document.querySelector(".document"));

import BaseComponent from "../../component.js";
export default class TextSectionInput extends BaseComponent {
    constructor() {
        super(`
    <div>
        <div class="form__container">
            <label for="title">TITLE</label>
            <input type="text" id="title">
        </div>
        <div class="form__container">
            <label for="body">URL</label>
            <textarea row="3" type="text" id="body"></textarea>
        </div>
    </div>
    `);
    }
    get title() {
        const element = this.element.querySelector("#title");
        return element.value;
    }
    get body() {
        const element = this.element.querySelector("#body");
        return element.value;
    }
}

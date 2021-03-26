import BaseComponent from "../../component.js";
export default class MediaSectionInput extends BaseComponent {
    constructor() {
        super(`
    <div>
        <div class="form__container">
            <label for="title">TITLE</label>
            <input type="text" id="title">
        </div>
        <div class="form__container">
            <label for="url">URL</label>
            <input type="text" id="url" >
        </div>
    </div>
    `);
    }
    get title() {
        const element = this.element.querySelector("#title");
        return element.value;
    }
    get url() {
        const element = this.element.querySelector("#url");
        if (!element.value) {
            return "https://youtu.be/5qap5aO4i9A";
        }
        return element.value;
    }
}

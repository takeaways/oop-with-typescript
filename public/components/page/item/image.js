import BaseComponent from "../../component.js";
export default class ImageComponent extends BaseComponent {
    constructor(title, url = "https://picsum.photos/600/300") {
        super(`
    <section class="image">
      <div class="image__holder">
        <img class="image__thumbnail">
      </div>
      <h2 class="image__title"></h2>
    </section>
    `);
        const imageElement = this.element.querySelector(".image__thumbnail");
        imageElement.src = url;
        imageElement.alt = title;
        const titleElement = this.element.querySelector(".image__title");
        titleElement.textContent = title;
    }
}

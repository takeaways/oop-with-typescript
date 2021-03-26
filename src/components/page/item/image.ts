import BaseComponent from "../../component.js";

export default class ImageComponent extends BaseComponent<HTMLElement>{
  
  constructor(title:string, url:string = "https://picsum.photos/600/300"){
    super(`
    <section class="image">
      <div class="image__holder">
        <img class="image__thumbnail">
      </div>
      <h2 class="image__title"></h2>
    </section>
    `);

    const imageElement = this.element.querySelector(".image__thumbnail")! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(".image__title")! as HTMLParagraphElement;
    titleElement.textContent = title;

  }

}
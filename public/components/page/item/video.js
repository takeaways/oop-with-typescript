import BaseComponent from "../../component.js";
export default class VideoComponent extends BaseComponent {
    constructor(title, url = "https://youtu.be/5qap5aO4i9A") {
        super(`
    <section class="video">
    <div class="video__player">
        <iframe src="" frameborder="0" class="video__iframe"></iframe>
        <h3 class="video__title"></h3>
    </div>
    </section>
    `);
        const iframe = this.element.querySelector(".video__iframe");
        iframe.src = this.convertToEmbeddedURL(url);
        const titleElement = this.element.querySelector(".video__title");
        titleElement.textContent = title;
    }
    convertToEmbeddedURL(url) {
        const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
        const match = url.match(regExp);
        const videoId = match ? match[1] || match[2] : undefined;
        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return url;
    }
}

import PageComponent from "./components/page.js";

export default class App{
  private readonly page:PageComponent;
  constructor(appRoot:HTMLElement){
    this.page = new PageComponent();
    this.page.attach(appRoot);
  }
}

new App(document.querySelector(".document")! as HTMLElement );
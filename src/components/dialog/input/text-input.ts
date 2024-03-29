import BaseComponent from "../../component.js";
import { TextData } from "../dialog.js";

export default class TextSectionInput extends BaseComponent<HTMLElement> implements TextData{
  constructor(){
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
    `)
  }

  get title():string{
    const element = this.element.querySelector("#title")! as HTMLInputElement;
    return element.value;

  }

  get body():string{
    const element = this.element.querySelector("#body")! as HTMLInputElement;
    return element.value;
  }
  
}
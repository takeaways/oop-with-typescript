export default class PageComponent{
    private element:HTMLUListElement;
    constructor(){
        this.element = document.createElement("ul")
        this.element.setAttribute("class", "page")
        this.element.textContent = "This is PageComponent"
    }

    attach(parent:HTMLElement, position:InsertPosition = "afterbegin"){
        parent.insertAdjacentElement(position, this.element)
    }
}
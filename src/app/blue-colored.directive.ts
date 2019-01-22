import { Directive, ElementRef, HostListener } from "@angular/core";
import { element } from "@angular/core/src/render3";

@Directive({
  selector: "[blueColored]"
})
export class BlueColoredDirective {
  constructor(element: ElementRef) {
    element.nativeElement.style.color = "blue";
  }

  @HostListener("click") doSomething() {
    alert("it works");
  }

  @HostListener("click", ["$event"])
  elemClicked(elem) {
    let srcElm = elem.srcElement;
    console.log("click", elem.srcElement.style.color);
    if ((srcElm.style.color = "blue")) {
      srcElm.style.color = "red";
    } else if ((srcElm.style.color = "red")) {
      srcElm.style.color = "blue";
    }
  }
}

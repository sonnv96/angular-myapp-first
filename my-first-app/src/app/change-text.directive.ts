import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[appChangeText]'
})
export class ChangeTextDirective {

  constructor(Element: ElementRef) {
    console.log (Element);
    Element.nativeElement.innerHTML = 'text is  changed by change text Directive ';
  }

}

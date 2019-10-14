import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

@HostBinding('class.open') isOpnet = false;

  @HostListener('click') toggleOpen(){
    this.isOpnet = !this.isOpnet;
  }
 

}

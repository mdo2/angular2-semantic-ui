/*
 * Dropdown  Semantic UI component
 */
import { Directive, Component, View, ElementRef } from "angular2/angular2";

@Component({
  selector: "sc-dropdown",
  directives: [],
  styles: [],
  template: `
  <div class="ui selection dropdown">
    <input type="hidden" name="gender">
    <i class="dropdown icon"></i>
    <div class="default text">Gender</div>
    <div class="menu">
      <div class="item" data-value="1">Male</div>
      <div class="item" data-value="0">Female</div>
    </div>
  </div>
  `
})
export class DropdownComponent {
  $elem: any;
  dropdown: any;

  constructor(elem: ElementRef){
    this.$elem = $(elem.nativeElement);
  }

  onInit(){
    this.dropdown = this.$elem.find(".ui.dropdown").dropdown();
  }
}

/*
 * Dropdown  Semantic UI component
 */
import { Directive, Component, View, ElementRef } from "angular2/angular2";
import { SemanticComponentDirective } from "../../directives/SemanticComponent";

@Component({
  selector: "sc-dropdown",
  directives: [ SemanticComponentDirective ],
  styles: [],
  template: `
  <div sc-component sc-name="dropdown" [sc-config]="scConfig" class="ui selection dropdown">
    <input type="hidden" name="gender">
    <i class="dropdown icon"></i>
    <div class="default text">Gender</div>
    <div class="menu">
      <div class="item" data-value="male">Male</div>
      <div class="item" data-value="female">Female</div>
    </div>
  </div>
  <span>Value: {{ value }}</span>
  `
})
export class DropdownComponent {

  //Semantic Component
  scConfig: Object = {};

  //Properties
  $elem: any;
  value: any;

  constructor(elem: ElementRef){
    this.$elem = $(elem.nativeElement);
  }

  // onInit(){
  // 
  // }
}

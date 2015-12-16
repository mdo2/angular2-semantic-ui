/*
 * Dropdown  Semantic UI component
 */
import { Directive, Component, View, ElementRef, Input, Output, EventEmitter } from "angular2/core";
import { SemanticComponentDirective } from "../../directives/SemanticComponent";

@Component({
  selector: "sc-dropdown"
})
@View({
  directives: [ SemanticComponentDirective ],
  styles: [],
  template: `
  <div class="ui dropdown selection"
    sc-component
    sc-name="dropdown"
    [sc-config]="scConfig"
  >
    <input type="hidden" name="dropdown-value">
    <i class="dropdown icon"></i>
    <div class="default text">{{ placeholder }}</div>
    <div class="menu">
      <div *ngFor="#item of data" class="item"
        [attr.data-value]="item.value ? item.value : item"
      >
        <span class="text" >{{ item.label ? item.label : (item.value ? item.value : item) }}</span>
      </div>
    </div>
  </div>
  `
})
export class DropdownComponent {

  //Semantic Component
  scConfig: Object = {
    onChange: this.onChange.bind(this)
  };

  @Input("placeholder") placeholder: string = "Select an option";
  @Input("data") data: any[];
  @Output("on-change") changeEmitter = new EventEmitter();

  //Properties
  $elem: any;
  $choice: any;
  current: string;
  previous: string;

  constructor(elem: ElementRef) {
    this.$elem = $(elem.nativeElement);
  }

  onChange(value, text, $choice): void {
    this.previous = this.current !== this.previous ? this.current : this.previous;
    this.current = value;
    this.$choice = $choice;
    this.changeEmitter.next(this.current);
  }
}

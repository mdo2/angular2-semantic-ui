/*
 * Common Semantic UI component directive
 */
import { Directive, ElementRef, Input } from "angular2/angular2";

@Directive({
  selector: "[sc-component]"
})
export class SemanticComponentDirective {

  // Properties
  $elem: any;

  //Inputs
  @Input("sc-config") config: any;
  @Input("sc-name") name: string;

  constructor(elem: ElementRef){
    this.$elem = $(elem.nativeElement);
  }

  onInit(){
    if ( this.name && typeof this.$elem[this.name] == "function" ){
      this.$elem[this.name](this.config);
    }
  }
}

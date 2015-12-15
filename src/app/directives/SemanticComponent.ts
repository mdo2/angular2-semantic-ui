/*
 * Common Semantic UI component directive
 */
import { Directive, ElementRef, Input, OnInit } from "angular2/core";

@Directive({
  selector: "[sc-component]"
})
export class SemanticComponentDirective implements OnInit{

  // Properties
  $elem: any;

  //Inputs
  @Input("sc-config") config: any;
  @Input("sc-name") name: string;

  constructor(elem: ElementRef){
    this.$elem = $(elem.nativeElement);
  }

  ngOnInit(){
    if ( this.name && typeof this.$elem[this.name] == "function" ){
      this.$elem[this.name](this.config);
    }
  }
}

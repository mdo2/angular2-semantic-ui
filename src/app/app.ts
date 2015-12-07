/*
 * Angular 2 decorators and services
 */
import {Directive, Component, View} from "angular2/angular2";
import { DropdownComponent } from "./components/dropdown/DropdownComponent";

/*
 * App Component
 * Top Level Component
 */
@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string "app"
  selector: "sc-app", // <app></app>
  // We need to tell Angular"s compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    DropdownComponent
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [``],
  // Every Angular template is first compiled by the browser before Angular runs it"s compiler
  template: `
  <header></header>

  <main>
    <sc-dropdown></sc-dropdown>
  </main>

  <footer></footer>
  `
})
export class App {

}

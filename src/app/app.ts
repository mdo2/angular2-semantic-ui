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
  styles: [`
    .item .icon:first-child:last-child{
      margin: 0px;
    }
  `],
  // Every Angular template is first compiled by the browser before Angular runs it"s compiler
  template: `
  <header class="red">
    <div class="ui red inverted menu">
      <div class="header item">
        Angular 2 Semantic UI Components
      </div>
      <div class="right menu">
        <a class="item white" target="_blank" href="https://github.com/mdo2/angular2-semantic-ui">
          <i class="github icon large"></i>
        </a>
      </div>
    </div>
  </header>

  <main>
    <dic class="container">
      <sc-dropdown></sc-dropdown>
    </div>
  </main>

  <footer></footer>
  `
})
export class App {
}

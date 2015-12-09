/*
 * App Component
 * Top Level Component
 */

import {Directive, Component, View} from "angular2/angular2";

import { SiteNavbarComponent } from "./site/components/navbar/navbar";

import { DropdownComponent } from "./components/dropdown/DropdownComponent";


@Component({
  selector: "sc-app",
  directives: [
    SiteNavbarComponent,
    DropdownComponent
  ],
  styles: [],
  template: `
  <header class="">
    <sc-site-navbar></sc-site-navbar>
  </header>

  <main>
    <dic class="ui container">
      <sc-dropdown></sc-dropdown>
    </div>
  </main>

  <footer></footer>
  `
})
export class App {
}

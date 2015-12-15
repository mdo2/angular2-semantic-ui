/*
 * App Component
 * Top Level Component
 */

import { Component, View } from "angular2/core";

import { SiteNavbarComponent } from "./site/components/navbar/navbar";

import { DropdownComponent } from "./components/dropdown/DropdownComponent";


@Component({
  selector: "sc-app",
})
@View({
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
    <div class="ui container">
      <sc-dropdown></sc-dropdown>
    </div>
  </main>

  <footer></footer>
  `
})
export class App {
}

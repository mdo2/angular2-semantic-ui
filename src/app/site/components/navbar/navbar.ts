/*
 * Site Navbar component
 */
import { Directive, Component, View } from "angular2/angular2";

@Component({
  selector: "sc-site-navbar"
})
@View({
  directives: [],
  styles: [`
    .item .icon:first-child:last-child{
      margin: 0px;
    }
  `],
  templateUrl: "components/navbar/navbar.html"
})
export class SiteNavbarComponent {
}

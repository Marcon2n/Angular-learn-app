import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isClick = [false, false]

  onToggle(a: any) {
    if (a === "btn1") {this.isClick[0] = !this.isClick[0]}
    else if (a === "btn2") {this.isClick[1] = !this.isClick[1]}
  }
}

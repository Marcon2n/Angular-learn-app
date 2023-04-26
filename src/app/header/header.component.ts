import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.component.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isClick = [false, false]
  courseSelected: any

  constructor (private courseSelect: AppService) {}

  ngOnInit(): void {
    this.courseSelect = this.courseSelect
  }

  onTest (a:any) {
    this.courseSelected = a.id
    console.log(this.courseSelected)
  }

  onToggle(a: any) {
    if (a === "btn1") {this.isClick[0] = !this.isClick[0]}
    else if (a === "btn2") {this.isClick[1] = !this.isClick[1]}
  }
}

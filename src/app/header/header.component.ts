import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isClick = [false, false]
  courseSelected:string = ''

  ngOnInit(): void {
  }

  onTest (a:any) {
    this.courseSelected = a.target.id
    console.log(a.target.id)
    console.log(this.courseSelected)
  }

  onToggle(a: any) {
    if (a === "btn1") {this.isClick[0] = !this.isClick[0]}
    else if (a === "btn2") {this.isClick[1] = !this.isClick[1]}
  }
}

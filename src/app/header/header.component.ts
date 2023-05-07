import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.component.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isClick = [false, false]
  courseSelected:string = ''

  constructor(
    private dataLesson: AppService
  ){}

  ngOnInit(): void {
    this.courseSelected = this.dataLesson.courseSelect
  }

  onTest (a:any) {
    this.dataLesson.onChangeCourse(a.target.id)
    console.log(this.dataLesson.courseSelect)
    console.log(a.target.id)
  }

  onToggle(a: any) {
    if (a === "btn1") {this.isClick[0] = !this.isClick[0]}
    else if (a === "btn2") {this.isClick[1] = !this.isClick[1]}
  }
}

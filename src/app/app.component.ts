import { Component, OnInit } from '@angular/core';

import { AppService } from './app.component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit{
  masterData: any
  dataSelected: any
  title = 'learn-app';

  constructor (private dataLesson: AppService, private dataSelect: AppService) {
  }

  ngOnInit(): void {
    this.masterData = this.dataLesson
    this.dataSelect = this.dataSelect
  }
}

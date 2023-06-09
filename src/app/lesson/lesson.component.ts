import { Component, ElementRef, Input, OnInit, SimpleChange, ViewChild } from '@angular/core';
import { AppService } from '../app.component.service';


@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit{
  
  // DATA CHÍNH
  @Input() courseSelected: string = 'angular'
  dataLesson: any
  dataSelect: any
  @ViewChild('myVideo') myVideo!: ElementRef
  checkLinkDownload: boolean = false
  linkDownload: Array<string> = []

  constructor (
    private appService: AppService
    ) {}

  ngOnInit(): void {
    this.dataLesson = this.appService.dataLesson
    this.dataSelect = this.dataLesson[this.courseSelected]
  }

  // THAY ĐỔI COURSE
  ngOnChanges(change: SimpleChange) {
    console.log(change)
    this.dataSelect = this.dataLesson[this.courseSelected]
  }

  // DOWNLOAD TÀI LIỆU HỌC PHẦN
  onDownload(a: any) {
    this.myVideo.nativeElement.src = a.link
    if (a.download.length === 0) {
      this.checkLinkDownload = false
    }
    else {
      this.checkLinkDownload = true
      this.linkDownload.splice(0)
      let test: Array<string> = a.download
      console.log(test[0])
      this.linkDownload.push(...test)
    }
  }

  // CHỨC NĂNG HIỆN DROPDOWN KÈM TRẠNG THÁI CỦA SECTION HEADER
  onToggle(a: any, b: any) 
  {
    if (b.classList[2] === "collapsed") 
    {
      b.classList.remove("collapsed");
      a.classList.add('show')
    }
    else 
    {
    b.classList.add('collapsed');
    a.classList.remove('show')
    }
  }

  // CHỨC NĂNG CHUYỂN TAB GHI CHÚ
  onActive(a: any) {
    a.classList.add('active')
    if (a.id === "btnTab1") 
    {
      document.querySelector('#note')?.classList.add('active', 'show');
      document.querySelector('#download')?.classList.remove('active', 'show');
      document.querySelector('#map')?.classList.remove('active', 'show');
      document.querySelector('#btnTab2')?.classList.remove('active');
      document.querySelector('#btnTab3')?.classList.remove('active');
    }
    else if (a.id === "btnTab2") 
    {
      document.querySelector('#download')?.classList.add('active', 'show');
      document.querySelector('#note')?.classList.remove('active', 'show');
      document.querySelector('#map')?.classList.remove('active', 'show');
      document.querySelector('#btnTab1')?.classList.remove('active');
      document.querySelector('#btnTab3')?.classList.remove('active');
    }
    else 
    {
      document.querySelector('#map')?.classList.add('active', 'show');
      document.querySelector('#note')?.classList.remove('active', 'show');
      document.querySelector('#download')?.classList.remove('active', 'show');
      document.querySelector('#btnTab1')?.classList.remove('active');
      document.querySelector('#btnTab2')?.classList.remove('active');
    }
  }

  
} 

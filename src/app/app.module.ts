import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LessonComponent } from './lesson/lesson.component';
import { LessonContentComponent } from './lesson/lesson-content/lesson-content.component';
import { ContentComponent } from './content/content.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LessonComponent,
    LessonContentComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

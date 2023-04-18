import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LessonComponent } from './lesson/lesson.component';
import { TestComponent } from './test/test.component';
import { CollapsedDirective } from './share/collapsed.directive';
import { LessonContentComponent } from './lesson/lesson-content/lesson-content.component';
import { ContentComponent } from './content/content.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LessonComponent,
    TestComponent,
    CollapsedDirective,
    LessonContentComponent,
<<<<<<< HEAD
    ContentComponent,
    TestComponent

  ],
  imports: [
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

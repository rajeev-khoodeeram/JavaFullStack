import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentFormComponent } from './components/student-form/student-form.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  // Import HttpClientModule to enable HTTP requests
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

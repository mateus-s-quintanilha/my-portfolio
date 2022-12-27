import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { Project1Component } from './components/projects/project1/project1.component';
import { HomeComponent } from './components/home/home.component';
import { Project2Component } from './components/projects/project2/project2.component';
import { Project3Component } from './components/projects/project3/project3.component';
import { Project4Component } from './components/projects/project4/project4.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Project1Component,
    HomeComponent,
    Project2Component,
    Project3Component,
    Project4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

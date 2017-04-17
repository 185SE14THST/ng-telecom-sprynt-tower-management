import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './assets/home/home.component';
import { AboutComponent } from './assets/about/about.component';
import { DataComponent } from './assets/data/data.component';
import { PageNotFoundComponent } from './pagenotfound.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, 
  HomeComponent, 
  AboutComponent,
 DataComponent,
  PageNotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

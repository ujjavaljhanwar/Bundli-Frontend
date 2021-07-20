import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Container1Component } from './container1/container1.component';
import { Container2Component } from './container2/container2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Container1Component,
    Container2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

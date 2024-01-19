import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { Exe01Component } from './exes/exe01/exe01.component';
import { Exe02Component } from './exes/exe02/exe02.component';
import { Exe03Component } from './exes/exe03/exe03.component';
import { Exe04Component } from './exes/exe04/exe04.component';
import { Exe05Component } from './exes/exe05/exe05.component';
import { HomeComponent } from './home/home.component';
import { StarComponent } from './exes/star/star.component';
import { ListProductComponent } from './exes/listProduct/list-product.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, Exe01Component,Exe02Component, Exe03Component, Exe04Component, Exe05Component, HomeComponent, StarComponent, ListProductComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

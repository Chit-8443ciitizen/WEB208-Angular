import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Exe01Component } from './exes/exe01/exe01.component';
import { Exe02Component } from './exes/exe02/exe02.component';
import { Exe03Component } from './exes/exe03/exe03.component';
import { Exe04Component } from './exes/exe04/exe04.component';
import { Exe05Component } from './exes/exe05/exe05.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'exercise01', component: Exe01Component },
  { path: 'exercise02', component: Exe02Component },
  { path: 'exercise03', component: Exe03Component },
  { path: 'exercise04', component: Exe04Component },
  { path: 'exercise05', component: Exe05Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

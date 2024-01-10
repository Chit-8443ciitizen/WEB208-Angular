import { Component, OnInit } from '@angular/core';

@Component({
  
  template: '<p>{{msg}}</p>',
  styleUrls: ['./exe01.component.css']
})
export class Exe01Component implements OnInit {
  msg: string = "";
  constructor () {}
  ngOnInit(): void {
    this.msg = "productlist work!"
  }
}

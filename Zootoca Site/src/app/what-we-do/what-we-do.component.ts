import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css']
})
export class WhatWeDoComponent implements OnInit {

  @Input() data: any;
  @Input() sectional: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}

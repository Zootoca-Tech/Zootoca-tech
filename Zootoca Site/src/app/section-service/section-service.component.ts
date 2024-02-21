import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-service',
  templateUrl: './section-service.component.html',
  styleUrls: ['./section-service.component.css']
})
export class SectionServiceComponent implements OnInit {

  itemsToShow = 6;
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

  loadMore() {
    this.itemsToShow += 3;
  }
  
  showLess() {
    this.itemsToShow = 6;
  }
}

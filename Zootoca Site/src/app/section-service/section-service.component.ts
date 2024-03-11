import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-service',
  templateUrl: './section-service.component.html',
  styleUrls: ['./section-service.component.css']
})
export class SectionServiceComponent implements OnInit {

  expandedServices: boolean[] = [];
  @Input() data: any;
  displayImage: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToContactUs(serviceName: any) {
    this.router.navigate(['/other/Contact-Us'], { queryParams: { title: serviceName } });
  }

  toggleReadMore(index: number): void {
    this.expandedServices[index] = !this.expandedServices[index];
  }

  showImage(event: any) {
    if (!event) {
      this.displayImage = "assets/default.png";
    }
    this.displayImage = event;
  }
}

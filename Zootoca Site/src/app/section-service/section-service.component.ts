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
  wholedata: any;
  serviceTitle: any;
  serviceDescription: any;
  image: any;
  subtitle: any;
  subdescription: any;
  subimg: any;
  subheading: any;
  subdescription1: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(title: string): void {
    console.log('Clicked item ID:', title);
    this.wholedata = this.data.services;
    console.log(this.wholedata,"wholedata")
    const selectedItem = this.wholedata.find((item: any) => item.title === title);
    if (selectedItem) {
      console.log(selectedItem,"selected all")
      this.serviceTitle = selectedItem.title;
      console.log('ServiceTitle:', this.serviceTitle);
      this.serviceDescription = selectedItem.description;
      console.log('desc:', this.serviceDescription);
      this.image = selectedItem.imageIn;
      this.subtitle = selectedItem.subtitle;
      this.subimg = selectedItem.subimage;
      this.subheading = selectedItem.subheading;
      this.subdescription1 = selectedItem.subescription;
      console.log('sub headign',this.subheading )
      // this.icon = selectedItem.icon;
      this.router.navigate(['/services/service-detail'], {
        queryParams: { title: this.serviceTitle, description: this.serviceDescription , img :this.image, subtit:this.subtitle, subdes: this.subdescription , subimg: this.subimg, subheading:this.subheading, subdescription1:this.subdescription1}
      });
    }
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

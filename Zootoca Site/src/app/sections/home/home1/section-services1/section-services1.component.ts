import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-services1',
  templateUrl: './section-services1.component.html',
  styleUrls: ['./section-services1.component.css']
})
export class SectionServices1Component implements OnInit {

  @Input() data: any;
  showFullDescription: boolean = false;
  selectedItemDetails: any;
  services: any;
  wholedata: any;
  serviceTitle: any;
  serviceDescription: any;
  image: any;
  initialCardsToShow: number = 6;
  incrementBy: number = 6;
  displayImage: any;
  icon: any;


  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  // showImage(event: any) {
  //   if (!event) {
  //     this.displayImage = "assets/default.png";
  //   }
  //   console.log("Imageeeeeeeeeee:", event);
  //   this.displayImage = event;
  // }

  // showImage(object: string): void {
  //   console.log(object,"object")
  //   const selectedItem = this.data.service.find((item: any) => item.serial === object);
  //   // if (selectedItem) {
  //     this.serviceTitle = selectedItem.title;
  //     console.log('ServiceTitle:', this.serviceTitle);
  //     this.serviceDescription = selectedItem.description;
  //     console.log('desc:', this.serviceDescription);
  //     this.image = selectedItem.image;
  //   this.router.navigate(['/services/service-detail'],{
  //   queryParams: { title: this.serviceTitle, description: this.serviceDescription , img :this.image} }
  //   // { queryParams: { serial: object}
  //   // }
  //   );
  //   // this.displayImage = imageUrl;
  //   //  console.log('Clicked item ID:', this.displayImage);
  //   // this.router.navigate(['/other/Contact-Us'], { queryParams: { title: serviceName } });
  // }
  

  toggleDescription(serial: string): void {
    console.log('Clicked item ID:', serial);
    this.wholedata =this.data.services;
    console.log(this.wholedata,"wholedata")
    const selectedItem = this.wholedata.find((item: any) => item.serial === serial);
    if (selectedItem) {
      this.serviceTitle = selectedItem.title;
      console.log('ServiceTitle:', this.serviceTitle);
      this.serviceDescription = selectedItem.description;
      console.log('desc:', this.serviceDescription);
      this.image = selectedItem.imageIn;
      // this.icon = selectedItem.icon;
      this.router.navigate(['/services/service-detail'], {
        queryParams: { title: this.serviceTitle, description: this.serviceDescription , img :this.image}
      });
    }
  }

  loadMoreCards() {
    this.initialCardsToShow += this.incrementBy;
  }

}

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
  subtitle: any;
  subdescription: any;
  subimg: any;
  subheading: any;
  subdescription1: any;


  
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
      console.log(selectedItem,"selected all")
      this.serviceTitle = selectedItem.title;
      console.log('ServiceTitle:', this.serviceTitle);
      this.serviceDescription = selectedItem.description;
      console.log('desc:', this.serviceDescription);
      this.image = selectedItem.imageIn;
      this.subtitle = selectedItem.subtitle;
      this.subdescription = selectedItem.subdescription;
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

  loadMoreCards() {
    this.initialCardsToShow += this.incrementBy;
  }

}

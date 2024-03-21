import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-project-grid3-cols',
  templateUrl: './page-project-grid3-cols.component.html',
  styleUrls: ['./page-project-grid3-cols.component.css']
})
export class PageProjectGrid3ColsComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

  whatwedo = {
    title: "Our Clients",
    work: [
      {
        image: "assets/images/client-logo/SSC Logo.png",
        title: "SSC MAX ACADEMY",
        serial: "01"
      },
      {
        image: "assets/images/client-logo/bn.jpg",
        title: "ANNAI VELANKANNI SHRINE",
        serial: "02"
      },
      {
        image: "assets/images/client-logo/GoldBell_foundation.jpg",
        title: "GOLD BELL FOUNDATION",
        serial: "03"
      },
      {
        image: "assets/images/client-logo/Ynside.jpg",
        title: "YNSIDE",
        serial: "04"
      },
      {
        image: "assets/images/client-logo/Refimac.jpg",
        title: "REFIMAC",
        serial: "05"
      },
      {
        image: "assets/images/l3.jpg",
        title: "FOOD EYE",
        serial: "06"
      },
      {
        image: "assets/images/l6.jpg",
        title: "OPEN MIC SHOWS",
        serial: "07"
      },
    ],
  }

  banner = {
    image: "https://starbright.co.za/wp-content/uploads/2023/03/Marketing-Agency-in-Pretoria.png",
    title: "Our Clients",
    description: "With creativity as our compass and determination as our fuel, we transform ideas into impactful works that resonate with brilliance and redefine industry standards.",
    page: "Works"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  projects = [
    {
      category: "cat-1",
      title: "Web Design",
      place: "...",
      image: "assets/images/projects/portrait/web design.jpg"
    },
    {
      category: "cat-2",
      title: "SEO",
      place: "",
      image: "assets/images/projects/portrait/seo.png"
    },
    {
      category: "cat-3",
      title: "Google Ads",
      place: "",
      image: "assets/images/projects/portrait/google ads.jpg"
    },
    {
      category: "cat-4",
      title: "Mobile App",
      place: "",
      image: "assets/images/projects/portrait/mobile app.png"
    },
    {
      category: "cat-5",
      title: "Social media Ads",
      place: "",
      image: "assets/images/projects/portrait/sm ads.jpg"
    },
    {
      category: "cat-6",
      title: "Marketing Strategy",
      place: "",
      image: "assets/images/projects/portrait/marketing.png"
    },
    {
      category: "cat-7",
      title: "Graphic Design",
      place: "",
      image: "assets/images/projects/portrait/graphic design.jpeg"
    },
    {
      category: "cat-8",
      title: "Video Editing",
      place: "Muscat, Sultanate of Oman",
      image: "assets/images/projects/portrait/video editing.png"
    },
    {
      category: "cat-9",
      title: "Influencer Marketing",
      place: "",
      image: "assets/images/projects/portrait/influencer marketing.png"
    },
    {
      category: "cat-10",
      title: "Event Management",
      place: "",
      image: "assets/images/projects/portrait/events.png"
    },
    {
      category: "cat-11",
      title: "Content Writing",
      place: "",
      image: "assets/images/projects/portrait/Content writing.jpg"
    },
       {
      category: "cat-12",
      title: "Infographics",
      place: "",
      image: "assets/images/projects/portrait/infographics.jpg"
    }
  ]
}

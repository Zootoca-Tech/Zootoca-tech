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
    title: "Our Works",
    work: [
      {
        image: "assets/images/l2.jpg",
        title: "SSC MAX ACADEMY",
        serial: "01"
      },
      {
        image: "assets/images/l1.jpg",
        title: "BESANT NAGAR ANNAI",
        serial: "02"
      },
      {
        image: "assets/images/l3.jpg",
        title: "HACKATHON",
        serial: "03"
      },
      {
        image: "assets/images/l6.jpg",
        title: "FIRE AND SAFETY PROMOTION VIDEOS",
        serial: "04"
      },
      {
        image: "assets/images/l6.jpg",
        title: "GOLD BELL FOUNDATION FOOD EYE",
        serial: "05"
      },
      {
        image: "assets/images/l6.jpg",
        title: "OPEN MIC SHOWS",
        serial: "06"
      }
    ],
  }

  banner = {
    image: "assets/images/banner/3.jpg",
    title: "Grid 3 Columns",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: " Project With Grid 3 Columns"
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

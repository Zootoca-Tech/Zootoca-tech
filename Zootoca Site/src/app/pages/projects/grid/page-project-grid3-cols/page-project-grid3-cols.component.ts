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
      category: "cat-4",
      title: "Marketing Strategy",
      place: "",
      image: "assets/images/projects/portrait/marketing.png"
    },
    {
      category: "cat-3",
      title: "Graphic Design",
      place: "",
      image: "assets/images/projects/portrait/graphic design.jpeg"
    },
    {
      category: "cat-2",
      title: "Video Editing",
      place: "Muscat, Sultanate of Oman",
      image: "assets/images/projects/portrait/video editing.png"
    },
    {
      category: "cat-1",
      title: "Influencer Marketing",
      place: "",
      image: "assets/images/projects/portrait/influencer marketing.png"
    },
    {
      category: "cat-1",
      title: "Event Management",
      place: "",
      image: "assets/images/projects/portrait/events.png"
    },
    {
      category: "cat-1",
      title: "Content Writing",
      place: "",
      image: "assets/images/projects/portrait/Content writing.jpg"
    },
       {
      category: "cat-1",
      title: "Infographics",
      place: "",
      image: "assets/images/projects/portrait/infographics.jpg"
    }
  ]

  testimonials = {
    experience: {
      title: "Infographic",
      items: [
        {
          count: "24",
          title: "Years of Experience"
        },
        {
          count: "340",
          title: "Project Taken"
        },
        {
          count: "86",
          title: "Awards Won"
        },
        {
          count: "36",
          title: "Twitter Followers"
        }
      ]
    },
    testimonials: {
      title: "Testimonial",
      content: [
        {
          image: "assets/images/testimonials/ceo1.jpeg",
          name: "Rosalina D. William",
          role: "Architect",
          quote: "“Amazing fast and reliable customer support! The team of developers are willing to go mile for customer service! Thanks! which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of me.”"
        },
        {
          image: "assets/images/testimonials/ceo2.png",
          name: "Mitchal Jhon",
          role: "Architect",
          quote: "“Amazing fast and reliable customer support! The team of developers are willing to go mile for customer service! Thanks! which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of me.”"
        },
        {
          image: "assets/images/testimonials/ceo3.jpeg",
          name: "Barney Smith",
          role: "Interior designer",
          quote: "“Great theme, just what we were looking for. Easy to install, easy to navigate. Well documented. Really enjoyed the support. which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of me.”"
        },
        {
          image: "assets/images/testimonials/ceo4.jpg",
          name: "Rosalina D. William",
          role: "Architect",
          quote: "“Great theme, just what we were looking for. Easy to install, easy to navigate. Well documented. Really enjoyed the support. which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of me.”"
        },
        {
          image: "assets/images/testimonials/ceo5.jpeg",
          name: "Rosalina D. William",
          role: "CEO, Intearch",
          quote: "“Great theme, just what we were looking for. Easy to install, easy to navigate. Well documented. Really enjoyed the support. which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of me.”"
        }
      ]
    }
  }
}

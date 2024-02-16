import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-about1',
  templateUrl: './page-about1.component.html',
  styleUrls: ['./page-about1.component.css']
})
export class PageAbout1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
     //image: "assets/images/banner/5.jpg",
     image: 'https://aws-in-eventphotos.s3.ap-south-1.amazonaws.com/BannerImages/About+Us.jpg',
    title: "About Company",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: "About 1"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  about = {
    image:"assets/new_images/Aboutimage.jpg",
    //image: "assets/images/background/bg5.jpg",
    title: "Our floors are designed to last a lifetime",
    description: "Since 1999, we have been providing great flooring solutions and customer service for homeowners and commercial clients. among flooring materials, none is more elegant and luxurious than natural stone."
  }

  // whatwedo = {
  //   title: "What We do",
  //   work: [
  //     {
  //       image: "assets/images/pic1.jpg",
  //       title: "Interior Design",
  //       serial: "01"
  //     },
  //     {
  //       image: "assets/images/pic2.jpg",
  //       title: "Architectur",
  //       serial: "02"
  //     },
  //     {
  //       image: "assets/images/pic3.jpg",
  //       title: "Floor Plan",
  //       serial: "03"
  //     }
  //   ],
  //   subtitle: "",
  //   description: ""
  // }

  // awards = {
  //   title: "We Achieved",
  //   achievements: [
  //     {
  //       day: "01",
  //       month: "Oct",
  //       years: "2013",
  //       title: "Global Kitchen and Bath",
  //       description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  //     },
  //     {
  //       day: "20",
  //       month: "Mar",
  //       years: "2014",
  //       title: "Kitchen & Bath Gallery",
  //       description: "A multitask profession which creates any land in beautiful creation"
  //     },
  //     {
  //       day: "28",
  //       month: "Aug",
  //       years: "2014",
  //       title: "International Fine Art",
  //       description: "Don’t know how to go with plan, give everything to interior design with calm."
  //     },
  //     {
  //       day: "20",
  //       month: "Oct",
  //       years: "2015",
  //       title: "Newyork Creative Art",
  //       description: "Every work has its professional which can perform their task with all the best standards."
  //     },
  //     {
  //       day: "27",
  //       month: "Nov",
  //       years: "2015",
  //       title: "Building Center of UAE",
  //       description: "Giving your home a new style every style. good design for good moments."
  //     },
  //     {
  //       day: "07",
  //       month: "Mar",
  //       years: "2016",
  //       title: "Art Contest in USA",
  //       description: "Interior design, a fine line with more shine a design gives you, your deam house"
  //     },
  //     {
  //       day: "19",
  //       month: "July",
  //       years: "2017",
  //       title: "Asia Creative Competition",
  //       description: "Give your consent, we design a perfect bend choose the style, we complete with our file"
  //     },
  //     {
  //       day: "27",
  //       month: "May",
  //       years: "2018",
  //       title: "Center of Gloucester",
  //       description: "Scrambled it to make a type specimen book. remaining essentially."
  //     }
  //   ]
  // }

  team = {
    title: "Our Team Experts",
    team: [
      {
        // image: "assets/images/our-team5/1.jpg",
        image: "assets/new_images/person1-about.jpg",
        name: "Johnny Jackman",
        role: "Architect"
      },
      {
        image: "assets/new_images/person2.jpg",
        name: "Daniel Rickman",
        role: "Architect"
      },
      {
        image: "assets/new_images/person3.jpg",
        name: "Mark Norwich",
        role: "Architect"
      }
    ]
  }

  // testimonials = {
  //   title: "Testimonial",
  //   testimonials: [
  //     {
  //       image: "assets/images/testimonials/pic1.jpg",
  //       role: "Architect",
  //       name: "Rosalina D. William",
  //       quotes: "Great theme, just what we were looking for. Easy to install, easy to navigate. Well documented. Really enjoyed the support."
  //     },
  //     {
  //       image: "assets/images/testimonials/pic2.jpg",
  //       role: "Architect",
  //       name: "Mitchal Jhon",
  //       quotes: "Amazing fast and reliable customer support! The team of willing to go mile for customer service! Thanks!"
  //     },
  //     {
  //       image: "assets/images/testimonials/pic3.jpg",
  //       role: "Interior designer",
  //       name: "Barney Smith",
  //       quotes: "Great theme, just what we were looking for. Easy to install, easy to navigate. Well documented. Really enjoyed the support."
  //     },
  //     {
  //       image: "assets/images/testimonials/pic4.jpg",
  //       role: "Architect",
  //       name: "Rosalina D. William",
  //       quotes: "Amazing fast and reliable customer support! The team of willing to go mile for customer service! Thanks!"
  //     }
  //   ]
  // }
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

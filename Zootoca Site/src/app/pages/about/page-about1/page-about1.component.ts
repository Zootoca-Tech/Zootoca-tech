import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-about1',
  templateUrl: './page-about1.component.html',
  styleUrls: ['./page-about1.component.css']
})
export class PageAbout1Component implements OnInit {

  isTextVisible: boolean = false;

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const textElement = document.querySelector('.animi');

    if (textElement) {
      const elementPosition = textElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight * 0.95) {
        this.isTextVisible = true;
      } else {
        this.isTextVisible = false; // Reset to false if scrolled out of view
      }
    }
  }
  
  ngOnInit(): void {
  }
  
  banner = {
     //image: "assets/images/banner/5.jpg",
    image: 'https://aws-in-eventphotos.s3.ap-south-1.amazonaws.com/BannerImages/About+Us.jpg',
    title: "About Company",
    description: "Zootoca Technologies, we prioritize people and their lifestyles. From SEO to captivating graphics and events, we offer comprehensive services tailored to your needs.",
    page: "About Us"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  about = {
    image:"assets/new_images/Aboutimage.jpg",
    //image: "assets/images/background/bg5.jpg",
    title: "Get to know us, get to work with us",
    description: "We are an integrated digital marketing company,who channelize client’s budget in online & offline campaigns or building your brand image for ensuring better future. we are a full service digital media company helping global brands communicate better with your customers.we help businesses achieve their goals through our outcome-oriented and data-driven digital marketing strategies.<br><br>we believe that all great ideas are born out of deep-rooted strategic thinking,By diving into a brand’s purpose,we create measurable and successful ideas that result in creative works that will work.<br><br>we arrive at a plan to achieve a goal while being ridiculous in expectation but feasible in execution.Trust us,we’ll leave you shocked & surprised.<br><br>In a world of monotonous marketing we’re the rebels,the misfits and the creative masterminds who dare to think outside the box.Say goodbye to the ordinary and Let’s dive into the EXTRAORDINARY with our ZOOTOCA."
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
    title: "Our Team",
    team: [
      {
        image: "assets/images/our-team5/1.jpg",
        name: "Johnny Jackman",
        role: "Architect"
      },
      {
        image: "assets/images/our-team5/2.jpg",
        name: "Daniel Rickman",
        role: "Architect"
      },
      {
        image: "assets/images/our-team5/3.jpg",
        name: "Mark Norwich",
        role: "Architect"
      },
      {
        image: "assets/images/our-team5/4.jpg",
        name: "Nich Jonas",
        role: "Architect"
      }
    ]
  }

  testimonials = {
    title: "Testimonial",
    testimonials: [
      {
        image: "assets/images/testimonials/pic1.jpg",
        role: "Architect",
        name: "Rosalina D. William",
        quotes: "Great theme, just what we were looking for. Easy to install, easy to navigate. Well documented. Really enjoyed the support."
      },
      {
        image: "assets/images/testimonials/pic2.jpg",
        role: "Architect",
        name: "Mitchal Jhon",
        quotes: "Amazing fast and reliable customer support! The team of willing to go mile for customer service! Thanks!"
      },
      {
        image: "assets/images/testimonials/pic3.jpg",
        role: "Interior designer",
        name: "Barney Smith",
        quotes: "Great theme, just what we were looking for. Easy to install, easy to navigate. Well documented. Really enjoyed the support."
      },
      {
        image: "assets/images/testimonials/pic4.jpg",
        role: "Architect",
        name: "Rosalina D. William",
        quotes: "Amazing fast and reliable customer support! The team of willing to go mile for customer service! Thanks!"
      }
    ]
  }
//   testimonials = {
//     experience: {
//       title: "Infographic",
//       items: [
//         {
//           count: "24",
//           title: "Years of Experience"
//         },
//         {
//           count: "340",
//           title: "Project Taken"
//         },
//         {
//           count: "86",
//           title: "Awards Won"
//         },
//         {
//           count: "36",
//           title: "Twitter Followers"
//         }
//       ]
//     },
    
//     testimonials: {
//       title: "Testimonial",
//       content: [
//         {
//           image: "assets/images/testimonials/ceo1.jpeg",
//           name: "Rosalina D. William",
//           role: "Architect",
//           quote: "“Amazing fast and reliable customer support! The team of developers are willing to go mile for customer service! Thanks! which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of me.”"
//         },
//         {
//           image: "assets/images/testimonials/ceo2.png",
//           name: "Mitchal Jhon",
//           role: "Architect",
//           quote: "“Amazing fast and reliable customer support! The team of developers are willing to go mile for customer service! Thanks! which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of me.”"
//         },
//         {
//           image: "assets/images/testimonials/ceo3.jpeg",
//           name: "Barney Smith",
//           role: "Interior designer",
//           quote: "“Great theme, just what we were looking for. Easy to install, easy to navigate. Well documented. Really enjoyed the support. which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of me.”"
//         },
//         {
//           image: "assets/images/testimonials/ceo4.jpg",
//           name: "Rosalina D. William",
//           role: "Architect",
//           quote: "“Great theme, just what we were looking for. Easy to install, easy to navigate. Well documented. Really enjoyed the support. which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of me.”"
//         },
//         {
//           image: "assets/images/testimonials/ceo5.jpeg",
//           name: "Rosalina D. William",
//           role: "CEO, Intearch",
//           quote: "“Great theme, just what we were looking for. Easy to install, easy to navigate. Well documented. Really enjoyed the support. which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of me.”"
//         }
//       ]
//     }
// }
 }

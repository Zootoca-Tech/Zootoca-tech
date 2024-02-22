import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services2',
  templateUrl: './services2.component.html',
  styleUrls: ['./services2.component.css']
})
export class Services2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "https://aws-in-eventphotos.s3.ap-south-1.amazonaws.com/BannerImages/Services.jpg",
    title: "Our Services",
    description: "Empower your brand with our dynamic services, From captivating photography to innovative marketing strategies, we've got you covered.",
    page: "Services"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  services = {
    title: "All Services",
    title2: "Services",
    services: [
      {

        serial: "01",
        icon: "https://aws-in-eventphotos.s3.ap-south-1.amazonaws.com/dummyImages/seo.jpg",
        title: "SEO",
        description: "We provide a range of architectural 3D modeling services to our customers to aid the Web Digital Media Group is a leading Android UI/UX App development company that delivers end-to-end Android App development services to open up new opportunities for business. Being a top company, we specialize to transform your unique ideas into real-time Android applications. We will help you unlock wonderful experience on different types of devices – foldable devices, tablets, smartphones, auto/cars, wearables/smartwatch, and television. No matter, whatever size and shape of your device is, you can have more engaging and fast experience. We, as the most trusted Android App development company, use latest tools to enable innovation. Our company is committed to unlocking the power of Android such as Android developer tools, security protocols, libraries, Android architecture components, and Android framework.",
        imageIn: "assets/images/service-images/seo.jpg"
      },
      {

        serial: "02",
        icon: "https://aws-in-eventphotos.s3.ap-south-1.amazonaws.com/dummyImages/webDevelopment.jpg",
        title: "Web Designing",
        description: "Analysis and planning services that help both the client and architects to work out the forthcoming project...",
        imageIn: "assets/images/service-images/WebdesIn.jpg"
      },
      {
        serial: "03",
        icon: "https://aws-in-eventphotos.s3.ap-south-1.amazonaws.com/dummyImages/marketing.jpg",
        title: "Social Media Marketing",
        description: "We offer comprehensive Architectural Engineering Services including Interior design, Master planning, 3D modeling..."
      },
      {
        serial: "04",
        icon: "https://aws-in-eventphotos.s3.ap-south-1.amazonaws.com/dummyImages/seo.jpg",
        title: "Graphic Design",
        description: "Project management is the process by which our team plans and executes your project. We will develop it..."
      },
      {
        serial: "05",
        icon: "https://aws-in-eventphotos.s3.ap-south-1.amazonaws.com/dummyImages/webDevelopment.jpg",
        title: "Andriod & ios App Development",
        description: "Our team also provides consultations on all architectural issues, even if you need specific info about working..."
      },
      {
        serial: "06",
        icon: "https://aws-in-eventphotos.s3.ap-south-1.amazonaws.com/dummyImages/events.jpg",
        title: "Event Management",
        description: "We combine Interior and Exterior Design services and often provide them as a single solution. It helps us..."
      },
      {
        serial: "07",
        icon: "https://aws-in-eventphotos.s3.ap-south-1.amazonaws.com/dummyImages/photography.jpg",
        title: "Photography & Videography",
        description: "We combine Interior and Exterior Design services and often provide them as a single solution. It helps us..."
      },
      {
        serial: "08",
        icon: "https://aws-in-eventphotos.s3.ap-south-1.amazonaws.com/dummyImages/marketing.jpg",
        title: "Influencer Markting",
        description: "Influencer marketing can be highly rewarding — if done right. Sidestep these potential pitfalls to ensure smooth influencer collaborations and successful campaign outcomes"
      }
    ]
  }

  about = {
    title: "A small efficient interior design team.",
    description: "<p>Inteshape is a team of highly talented, experienced, and award-winning architects and designers. Our company has been the leading provider of architecture services to clients throughout the USA since 1999. We pay attention to every demand...</p> <ul class=\"list-angle-right anchor-line\"> <li><a>We provide a architectural 3D modeling services.</a></li> <li><a>Our specialists are ready to consult you on any topic.</a></li> <li><a>We develop and implement better interior design.</a></li> <li><a>We provide high-quality interior services for clients.</a></li> </ul>",
    media: "https://player.vimeo.com/video/34741214?color=ffffff&title=0&byline=0&portrait=0",
    experience: "25 Years"
  }

  counter = [
    {
      count: "5",
      title: "Our Experience"
    },
    {
      count: "30",
      title: "Project Taken"
    },
    {
      count: "136",
      title: "Awards Won"
    },
    {
      count: "10K",
      title: "Twitter Followers"
    }
  ]

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
}

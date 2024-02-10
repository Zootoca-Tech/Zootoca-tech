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
    image: "https://aws-in-eventphotos.s3.ap-south-1.amazonaws.com/medium_2023-08-22-08d661b8d9.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCmFwLXNvdXRoLTEiRjBEAiBCOIBjrC9IV9oDTXutOLt99MHiUqN77dUbABplhP6x6wIgL5cC40VKm1QwnTsWA80sc49ZV%2F7uBQRan6cnpEvsrFMq5AIIJxAAGgw4NTE3MjU1MzQ1NTEiDClUkWXw4RZZ%2Fg8SlyrBAsm43Ql2KT7nfEVy%2FtVhzsI19F0at7jB8LFCYU8XFJsleYC5IaFGCS056Dms7Qt9JfAV2iNrXS%2FUyDzHrovmnxE6DvdE5ks4BeIbYf2qidcMy5l5lTTNl8NcpVD4rd4MSY0Zk5cGKBs8lCnsI0Fl7ED2XbbqqC%2FS4OJhrpLgbb8n8HMudCrtaBRw1BQqHe1gDK9BGqDELlRkJ3d79183FW96APvmkF%2Byza29E3SZTqzfG%2BvrhNAIL2jbfK1eUoGIncC8hXStm%2BB%2FB2x8RqbZImnLLB6vTWkJnruobavqDTKPwaj4bvv%2FHn0Ej5FsptVAm%2FJf8Fr0I4ayhmQHRiG0Tjehg1cMB0ZS3kNa%2BVhvTXCF7V0uT0LQuwQ%2F8GA0IJaEqcQnVC%2FZ2UQcxmrwtzUVwK%2BUjxY7NFeWE5zT8wMRZ8EahjCWkJyuBjq0AhgMCDUhmWNLEcGmDRr9FdulA6E9nUiXvq7d6tF%2BsOfr%2Bo%2BIgchSciWi3OZ1EwFfeFKicbK8g%2BzsRI4YEuhPyn1X2E0ODRPhgq3JsuZAODjsA4G%2BSX1Qj0f%2B2IgZtfVZNsyG9rNkQm6n3zY6xvQ7bYMPZAsotGT5sC84TUGFuHdES737nBWJtPpEYX%2B925xXhsi6YLblnrqiIFCpLOxJ7g93YzPhFKrDr7Q0GfEk1Hjj9Vn8OFlWVn2XaTkEZATOhZZClqcEnJBBVZaa2VjPTJb9v3oHuOV4VeSoTSb%2BQf3muK2u01AzC0n82%2FHoiMaZyk%2BUiUusbbTcTA4WLXv%2FdWg%2BJH2VnLUqoWNsHwZUmMuRQeWOXorzF5vJd5PsQocN1YWWsDoj1g45M4KddPcT1Tj7jMiJ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240210T053746Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA4MTWMIVLTZIEDQ3O%2F20240210%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=5ad3526e50f16fd30b75cf2502c2cb670fe488b4373b25d7aca274eab154a511",
    title: "Service Style Two",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: "Services 2"
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
        icon: "flaticon-web",
        title: "SEO",
        description: "We provide a range of architectural 3D modeling services to our customers to aid the Web Digital Media Group is a leading Android UI/UX App development company that delivers end-to-end Android App development services to open up new opportunities for business. Being a top company, we specialize to transform your unique ideas into real-time Android applications. We will help you unlock wonderful experience on different types of devices – foldable devices, tablets, smartphones, auto/cars, wearables/smartwatch, and television. No matter, whatever size and shape of your device is, you can have more engaging and fast experience. We, as the most trusted Android App development company, use latest tools to enable innovation. Our company is committed to unlocking the power of Android such as Android developer tools, security protocols, libraries, Android architecture components, and Android framework.",
        image: "assets/images/service-images/seo.jpg"
      },
      {

        serial: "02",
        icon: "flaticon-window",
        title: "WebApp Development",
        description: "Analysis and planning services that help both the client and architects to work out the forthcoming project..."
      },
      {
        serial: "03",
        icon: "flaticon-window",
        title: "Social Media Marketing",
        description: "We offer comprehensive Architectural Engineering Services including Interior design, Master planning, 3D modeling..."
      },
      {
        serial: "04",
        icon: "flaticon-skyline",
        title: "Event Management",
        description: "Project management is the process by which our team plans and executes your project. We will develop it..."
      },
      {
        serial: "05",
        icon: "flaticon-bed",
        title: "Infotography",
        description: "Our team also provides consultations on all architectural issues, even if you need specific info about working..."
      },
      {
        serial: "06",
        icon: "flaticon-door",
        title: "Influncer Marketing",
        description: "We combine Interior and Exterior Design services and often provide them as a single solution. It helps us..."
      },
      {
        serial: "07",
        icon: "flaticon-bed",
        title: "Content Writing",
        description: "We combine Interior and Exterior Design services and often provide them as a single solution. It helps us..."
      },
      {
        serial: "08",
        icon: "flaticon-door",
        title: "Influncer Marketing",
        description: "Influencer marketing can be highly rewarding — if done right. Sidestep these potential pitfalls to ensure smooth influencer collaborations and successful campaign outcomes"
      },
      {
        serial: "09",
        icon: "flaticon-window",
        title: "Market Strategy",
        description: "A marketing strategy is a course of action used to promote and sell a company's products or services. Learning more about marketing strategies can improve your methods of reaching your target audience.In this article, we explain what a marketing strategy is, discuss why it's important, list 17 marketing strategies with examples and provide tips on writing a marketing strategy of your own."
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

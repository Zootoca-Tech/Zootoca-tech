import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  about = {
    title: "About us",
    subtitle: "We are competitive",
    description: "Welcome to Zootoca Technologies, a dynamic and innovative digital media company dedicated to shaping the future of content creation, distribution, and engagement. Our passion lies in harnessing the power of technology to transform ideas into captivating digital experiences.",
    images: [
      {
        image: "assets/images/about-slider/1.jpg"
      },
      {
        image: "assets/images/about-slider/2.jpg"
      },
      {
        image: "assets/images/about-slider/3.jpg"
      },
      {
        image: "assets/images/about-slider/4.jpg"
      },
      {
        image: "assets/images/about-slider/5.jpg"
      }
    ]
  }

  whatwedo = {
    title: "What We do",
    work: [
      {
        image: "assets/images/pic1.jpg",
        title: "SEO",
        serial: "01"
      },
      {
        image: "assets/images/pic2.jpg",
        title: "Cutting-Edge Content Creation",
        serial: "02"
      },
      {
        image: "assets/images/pic3.jpg",
        title: "Tech-Driven Solutions",
        serial: "03"
      }
    ],
    subtitle: "We present the idea with impressive details.",
    description: "Vivid colors and abstract patterns, combined with unique uses of light, textures, and space, create an outdoor space that magnifies..."
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

  // testimonials = {
  //   experience: {
  //     title: "Infographic",
  //     items: [
  //       {
  //         count: "24",
  //         title: "Years of Experience"
  //       },
  //       {
  //         count: "340",
  //         title: "Project Taken"
  //       },
  //       {
  //         count: "86",
  //         title: "Awards Won"
  //       },
  //       {
  //         count: "36",
  //         title: "Twitter Followers"
  //       }
  //     ]
  //   },
  //   testimonials: {
  //     title: "Testimonial",
  //     content: [
  //       {
  //         image: "assets/images/testimonials/pic1.jpg",
  //         name: "Rosalina D. William",
  //         role: "Architect",
  //         quote: "“Amazing fast and reliable customer support! The team of developers are willing to go mile for customer service! Thanks! which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of me.”"
  //       },
  //       {
  //         image: "assets/images/testimonials/pic2.jpg",
  //         name: "Mitchal Jhon",
  //         role: "Architect",
  //         quote: "“Amazing fast and reliable customer support! The team of developers are willing to go mile for customer service! Thanks! which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of me.”"
  //       },
  //       {
  //         image: "assets/images/testimonials/pic3.jpg",
  //         name: "Barney Smith",
  //         role: "Interior designer",
  //         quote: "“Great theme, just what we were looking for. Easy to install, easy to navigate. Well documented. Really enjoyed the support. which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of me.”"
  //       },
  //       {
  //         image: "assets/images/testimonials/pic4.jpg",
  //         name: "Rosalina D. William",
  //         role: "Architect",
  //         quote: "“Great theme, just what we were looking for. Easy to install, easy to navigate. Well documented. Really enjoyed the support. which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of me.”"
  //       },
  //       {
  //         image: "assets/images/testimonials/pic3.jpg",
  //         name: "Rosalina D. William",
  //         role: "CEO, Intearch",
  //         quote: "“Great theme, just what we were looking for. Easy to install, easy to navigate. Well documented. Really enjoyed the support. which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of me.”"
  //       }
  //     ]
  //   }
  // }

  homeservice = {
    title: "All Services",
    title2: "Services",
    services: [
      {
        serial: "01",
        icon: "assets/images/wd.png",
        title: "Web Design",
        description: "We create user-friendly websites that foster lasting connections, enabling you to cultivate and nurture long-term relationships with your customers."
      },
      {
        serial: "02",
        icon: "assets/images/seo.png",
        title: "SEO",
        description: "We excel in driving organic leads and traffic to your website through powerful SEO strategies, fostering natural online growth."
      },
      {
        serial: "03",
        icon: "assets/images/pe.png",
        title: "Photo Editing",
        description: "We effortlessly elevate ordinary photos into captivating masterpieces, meticulously enhancing the essence and beauty of each moment."
      },
      {
        serial: "04",
        icon: "assets/images/em.png",
        title: "Event Management",
        description: "We specialize in crafting and executing seamless, extraordinary events that leave a lasting impression, making your moments truly unforgettable."
      },
      {
        serial: "05",
        icon: "assets/images/ve.png",
        title: "Video Editing",
        description: "We expertly blend visuals and sound, sculpting a seamless masterpiece that brings the narrative to life with precision and finesse."
      },
      {
        serial: "06",
        icon: "assets/images/gd.png",
        title: "Graphic Design",
        description: "We seamlessly blend creativity with precision, transforming ideas into visually captivating masterpieces through the artistry of graphic design."
      },
      {
        serial: "07",
        icon: "assets/images/ms.png",
        title: "Marketing Strategy",
        description: "We strategically connect with our audience, blending data-driven insights and compelling narratives to elevate our brand impact."
      },  
      {
        serial: "08",
        icon: "assets/images/cw.png",
        title: "Content Writing",
        description: "We, as content creators, blend creativity and precision to elevate brands and engage audiences effectively."
      },
      {
        serial: "09",
        icon: "assets/images/im.png",
        title: "Influencer Marketing",
        description: "We amplify brand stories through strategic influencer partnerships, creating authentic connections that captivate audiences worldwide."
      },
      {
        serial: "10",
        icon: "assets/images/ma.png",
        title: "Mobile App",
        description: "We elevate experiences through cutting-edge mobile apps, bridging innovation and convenience seamlessly."
      },
      {
        serial: "11",
        icon: "assets/images/sma.png",
        title: "Social media Ads",
        description: "We captivate audiences with precision-targeted social media ads, creating visually stunning content that elevates your brand."
      },
      {
        serial: "12",
        icon: "assets/images/ga.png",
        title: "Google Ads",
        description: "We elevate businesses to new heights through the power of Google Ads, utilizing advanced technology and data-driven strategies."
      }
    ]
  }

  projects = {
    title: "All Projects",
    projects: [
      {
        category: "col-one",
        title: "Chair Furniture",
        place: "Muscat, Sultanate of Oman",
        image: "assets/images/projects/portrait/pic1.jpg"
      },
      {
        category: "col-two",
        title: "Chair Furniture",
        place: "Muscat, Sultanate of Oman",
        image: "assets/images/projects/portrait/pic2.jpg"
      },
      {
        category: "col-three",
        title: "Chair Furniture",
        place: "Muscat, Sultanate of Oman",
        image: "assets/images/projects/portrait/pic3.jpg"
      },
      {
        category: "col-four",
        title: "Chair Furniture",
        place: "Muscat, Sultanate of Oman",
        image: "assets/images/projects/portrait/pic4.jpg"
      },
      {
        category: "col-three",
        title: "Chair Furniture",
        place: "Muscat, Sultanate of Oman",
        image: "assets/images/projects/portrait/pic5.jpg"
      },
      {
        category: "col-two",
        title: "Chair Furniture",
        place: "Muscat, Sultanate of Oman",
        image: "assets/images/projects/portrait/pic6.jpg"
      },
      {
        category: "col-one",
        title: "Chair Furniture",
        place: "Muscat, Sultanate of Oman",
        image: "assets/images/projects/portrait/pic7.jpg"
      }
    ]
  }

  // clients = {
  //   title: "Our Clients",
  //   title2: "Clients",
  //   clients: [
  //     "assets/images/client-logo/logo1.png",
  //     "assets/images/client-logo/logo2.png",
  //     "assets/images/client-logo/logo3.png",
  //     "assets/images/client-logo/logo4.png",
  //     "assets/images/client-logo/logo5.png",
  //     "assets/images/client-logo/logo6.png",
  //     "assets/images/client-logo/logo7.png",
  //     "assets/images/client-logo/logo8.png"
  //   ]
  // }

  team = {
    title: "Super Team",
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

  client = [
    "assets/images/client-logo/BN Logo.png",
    "assets/images/client-logo/SSC Logo.png",
    "assets/images/client-logo/3.png",
    "assets/images/client-logo/4.png",
    "assets/images/client-logo/5.png",
    "assets/images/client-logo/6.png",
  ]
}

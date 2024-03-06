import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  constructor(private router: Router) { }

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
        image: "assets/images/testimonials/ceo1.jpeg",
        name:"Kalai Selvan",
        role: "(Director)",
        company: "SSC  Max Academy",
        quotes: "An absolute joy to work with ZOOTOCA Technology.They helped us with every aspect of designing,making videos and setting up our website and they always go extra mile with customer support and service."
      },
      {
        image: "assets/images/testimonials/ceo2.png",
        name:"Thankamani. K",
        role: "(Director)",
        company: "GoldBell Foundation",
        quotes: "They are so responsive and timely in getting back to me.I love their design sense, and their willingness to dig down deep to understand my business and what’s important to me and the people I need to reach.I’m so thankful to ZOOTOCA."
      },
      {
        image: "assets/images/testimonials/ceo3.jpeg",
        name:"",
        role: "",
        company: "Annai Velankanni Shrine",
        quotes: "Viewing a mass, whether via television or on the internet, is certainly a worthwhile activity.ZOOTOCA Technology help us to make a live mass video and other special occasion related videos in a great way.They have a young,energetic editors to make a quality videos to reach the viewers."
      },
      {
        image: "assets/images/testimonials/ceo4.jpg",
        name:"Prabhu. T",
        role: "(Director)",
        company: "Foodeye",
        quotes: "Awesome experience working with this team.They continuously gives suggestions to improve our online presence. We do not have to worry when ZOOTOCA is with us. Truly grateful for all the efforts they’ve put making our company a success today!"
      },
      {
        image: "assets/images/testimonials/ceo5.jpeg",
        name:"Novel",
        role: "(Director)",
        company: "YNside",
        quotes: "Heroes of ZOOTOCA believes in client success and they have an array of tools and expertise to make that happen from digital marketing to SEO, to website design. Best of all, they have dedicated and responsive team that is open to ideas!"
      },
      {
        image: "assets/images/testimonials/ceo3.jpeg",
        name:"Murali",
        role: "(Event Coordinator)",
        company: "Open Mic Shows",
        quotes: "Viewing a mass, whether via television or on the internet, is certainly a worthwhile activity.ZOOTOCA Technology help us to make a live mass video and other special occasion related videos in a great way.They have a young,energetic editors to make a quality videos to reach the viewers."
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
        icon: "assets/images/em.png",
        title: "Event Management",
        description: "We specialize in crafting and executing seamless, extraordinary events that leave a lasting impression, making your moments truly unforgettable.",
        PopupImage: "assets/images/service-images/seoCvr.jpg"
      },
      {
        serial: "02",
        icon: "assets/images/seo.png",
        title: "SEO",
        description: "We excel in driving organic leads and traffic to your website through powerful SEO strategies, fostering natural online growth.",
        PopupImage: "assets/images/service-images/seoCvr.jpg"
      },
      {
        serial: "03",
        icon: "assets/images/pg.png",
        title: "Photography",
        description: "We effortlessly transform everyday photos into captivating masterpieces, meticulously enhancing the essence and beauty of each captured moment",
        PopupImage: "assets/images/service-images/seoCvr.jpg"
      },
      {
        serial: "04",
        icon: "assets/images/wd.png",
        title: "Web Design",
        description: "We create user-friendly websites that foster lasting connections, enabling you to cultivate and nurture long-term relationships with your customers.",
        PopupImage: "assets/images/service-images/seoCvr.jpg"
      },
      {
        serial: "05",
        icon: "assets/images/ve.png",
        title: "Video Editing",
        description: "We expertly blend visuals and sound, sculpting a seamless masterpiece that brings the narrative to life with precision and finesse.",
        PopupImage: "assets/images/service-images/seoCvr.jpg"
      },
      {
        serial: "06",
        icon: "assets/images/gd.png",
        title: "Graphic Design",
        description: "We seamlessly blend creativity with precision, transforming ideas into visually captivating masterpieces through the artistry of graphic design.",
        PopupImage: "assets/images/service-images/seoCvr.jpg"
      },
      {
        serial: "07",
        icon: "assets/images/ms.png",
        title: "Marketing Strategy",
        description: "We strategically connect with our audience, blending data-driven insights and compelling narratives to elevate our brand impact.",
        PopupImage: "assets/images/service-images/seoCvr.jpg"
      },  
      {
        serial: "08",
        icon: "assets/images/cw.png",
        title: "Content Writing",
        description: "We, as content creators, blend creativity and precision to elevate brands and engage audiences effectively.",
        PopupImage: "assets/images/service-images/seoCvr.jpg"
      },
      {
        serial: "09",
        icon: "assets/images/im.png",
        title: "Influencer Marketing",
        description: "We amplify brand stories through strategic influencer partnerships, creating authentic connections that captivate audiences worldwide.",
        PopupImage: "assets/images/service-images/seoCvr.jpg"
      },
      {
        serial: "10",
        icon: "assets/images/ma.png",
        title: "Mobile App",
        description: "We elevate experiences through cutting-edge mobile apps, bridging innovation and convenience seamlessly.",
        PopupImage: "assets/images/service-images/seoCvr.jpg"
      },
      {
        serial: "11",
        icon: "assets/images/sma.png",
        title: "Social media Ads",
        description: "We captivate audiences with precision-targeted social media ads, creating visually stunning content that elevates your brand.",
        PopupImage: "assets/images/service-images/seoCvr.jpg"
      },
      {
        serial: "12",
        icon: "assets/images/ga.png",
        title: "Google Ads",
        description: "We elevate businesses to new heights through the power of Google Ads, utilizing advanced technology and data-driven strategies.",
        PopupImage: "assets/images/service-images/seoCvr.jpg"
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
    "assets/images/client-logo/GoldBell_foundation.jpg",
    "assets/images/client-logo/ynside.webp"
  ]
}

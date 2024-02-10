import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services1',
  templateUrl: './services1.component.html',
  styleUrls: ['./services1.component.css']
})
export class Services1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    image: "assets/images/banner/allService.jpg",
    title: "Service Style one",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: "Services 1"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }

  whatwedo = {
    title: "What We do",
    work: [
      {
        image: "assets/images/pic1.jpg",
        title: "Interior Design",
        serial: "01"
      },
      {
        image: "assets/images/pic2.jpg",
        title: "Architectur",
        serial: "02"
      },
      {
        image: "assets/images/pic3.jpg",
        title: "Floor Plan",
        serial: "03"
      }
    ],
    subtitle: "",
    description: ""
  }

  services = {
    title: "Services",
    services: [
      {
        title: "Architecture",
        description: "We combine Interior and Exterior Design services and often provide them as a single solution. It helps us...",
        serial: "01"
      },
      {
        title: "Planning",
        description: "Landscape plans for drainage problems may also entail planting beds away from the home’s foundation.",
        serial: "02"
      },
      {
        title: "Exterior",
        description: "We offer comprehensive Architectural Engineering Services including Interior design, Master planning...",
        serial: "03"
      },
      {
        title: "Decoration",
        description: "We provide a range of architectural 3D modeling services to our customers to aid the design, planning...",
        serial: "04"
      },
      {
        title: "Interior Planing",
        description: "Project management is the process by which our team plans and executes your project. We will develop...",
        serial: "05"
      },
      {
        title: "Style Selection",
        description: "Our team also provides consultations on all architectural issues, even if you need specific info about working...",
        serial: "06"
      }
    ]
  }

  specializations = [
    {
      image: "assets/images/services/service-projects/1.jpg",
      serial: "01",
      icon: "flaticon-sketch",
      title: "Smartly Execute",
      description: "Our team also provides consultations on all architectural issues, even if you need."
    },
    {
      image: "assets/images/services/service-projects/2.jpg",
      serial: "02",
      icon: "flaticon-stairs",
      title: "Perfect Design",
      description: "We combine Interior and Exterior Design services and often provide them as a single solution."
    },
    {
      image: "assets/images/services/service-projects/3.jpg",
      serial: "03",
      icon: "flaticon-window",
      title: "Carefully planned",
      description: "Landscape plans for drainage problems may also entail planting beds away"
    }
  ]

  clients = [
    "assets/images/client-logo/1.png",
    "assets/images/client-logo/2.png",
    "assets/images/client-logo/3.png",
    "assets/images/client-logo/4.png",
    "assets/images/client-logo/5.png",
    "assets/images/client-logo/6.png"
  ]
}

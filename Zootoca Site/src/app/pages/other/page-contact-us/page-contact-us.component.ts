import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from 'src/web-api-services/email-service.service';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page-contact-us',
  templateUrl: './page-contact-us.component.html',
  styleUrls: ['./page-contact-us.component.css']
})
export class PageContactUsComponent implements OnInit {
  contactusform: FormGroup;
  con: any;
  submitted: boolean = false;
  isLoading: boolean = false;

  constructor(private _fb: FormBuilder,
    private router: Router,
   // private modalService: NgbModal,
    //private Toastr: NotificationService,
    private _emailservice: EmailService) { 

    this.contactusform = this._fb.group(
      {
        UserName:['',[Validators.required]],
        from: ['',[Validators.required]],
        to:['akashks3733@gmail.com'],//Add to email address(hardcore)
        Message:[''],
        ContactNumber:['',[Validators.required]],
        // Address:[''],
        Result:[''],
       //subject as service
        Service:['0',[Validators.required]]
      });

  }



  ngOnInit(): void {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactusform.controls;
  }

  OnSubmit(){
    this._emailservice.sendemail(this.contactusform.value).subscribe(data=>{
      console.log("trigged0",this.contactusform.value);
      console.log("emailsend",data);
      this.isLoading = false;
    })
  }

  //this is service list binded with html//
  servicelist = [
    {
      id: "01",
      title: "Events",
    },
    {
      id: "02",
      title: "SEO",
    },
    {
      id: "03",
      title: "Google Ads",
    },
    {
      id: "04",
      title: "Mobile Apps",
    },
    {
      id: "05",
      title: "Social Media Ads ",
    },
    {
      id: "06",
      title: "Marketing Stratergy",
    },
    {
      id: "06",
      title: "Graphic Design",
    },
    {
      id: "07",
      title: "Event Management",
    },
    {
      id: "08",
      title: "Video Editing",
    },
    {
      id: "09",
      title: "Influencer Marketing",
    },
    {
      id: "10",
      title: "Content Writing",
    },
   
  
  ]


  banner = {
    image: "https://aws-in-eventphotos.s3.ap-south-1.amazonaws.com/BannerImages/contact+us.jpg",
    title: "Contact Us Form",
    description: "The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized.",
    page: "Contact Us"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }
}

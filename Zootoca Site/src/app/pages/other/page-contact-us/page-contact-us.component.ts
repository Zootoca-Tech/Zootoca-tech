import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from 'src/web-api-services/email-service.service';
import { NotifyService } from 'src/web-api-services/notify.service';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-page-contact-us',
  templateUrl: './page-contact-us.component.html',
  styleUrls: ['./page-contact-us.component.css']
})
export class PageContactUsComponent {
  contactusform: FormGroup;
  con: any;
  submitted: boolean = false;
  isLoading: boolean = false;
  error: any;

  constructor(private _fb: FormBuilder,
    private router: Router,

    private Toastr: NotifyService,
    private _emailservice: EmailService) { 

    this.contactusform = this._fb.group(
      {
        UserName:['',[Validators.required]],
        from: ['',[Validators.required]],
        to:['zootocatechnologies@gmail.com'],//Add to email address(hardcore)
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

  OnSubmit() {
    this.submitted = true;
    if (this.contactusform.invalid) {
      return;
    }
    this._emailservice.sendemail(this.contactusform.value).subscribe(data => {
      console.log(data)
      this.contactusform.reset();
    }, error => {
      if (error.status === 200)
        this.Toastr.showSuccess(error.error.text, "Success");
      if (error.status === 500)
        this.Toastr.showError(error.error.text, "Error");
    }
    )
    this.contactusform.reset();
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

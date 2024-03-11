import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailService } from 'src/web-api-services/email-service.service';
import { NotifyService } from 'src/web-api-services/notify.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-page-contact-us',
  templateUrl: './page-contact-us.component.html',
  styleUrls: ['./page-contact-us.component.css']
})
export class PageContactUsComponent implements OnInit{

  contactusform!: FormGroup;
  con: any;
  submitted: boolean = false;
  isLoading: boolean = false;
  error: any;
  serviceName: any = '';
  serviceNamedtl: any;

  constructor(private _fb: FormBuilder, private router: Router,
    private Toastr: NotifyService,private _emailservice: EmailService,
    private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.serviceName = params['title'];
    });
    this.route.queryParams.subscribe(params => {
      this.serviceNamedtl = params['title'];
      console.log(this.serviceNamedtl)
    });

    this.contactusform = this._fb.group({
      userName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      selectedService: [this.serviceName || this.serviceNamedtl|| '', Validators.required],
      message: [''],
    });
  }
  
  get formControls() {
    return this.contactusform.controls;
  }
  
  OnSubmit() {
    this.submitted = true;
  
    if (this.contactusform.invalid) {
      return;
    }
  
    this._emailservice.sendemail(this.contactusform.value).subscribe(
      (data) => {
        console.log(data);
       
      },
      (error) => {
        if (error.status === 200)
          this.Toastr.showSuccess(error.error.text, 'Success');
        if (error.status === 500)
          this.Toastr.showError(error.error.text, 'Error');
      }
    );
    this.contactusform.reset();
    this.submitted = false;
    this.contactusform.reset({ selectedService: '' });
  }
  
  //this is service list binded with html//
  servicelist = [
    {
      id: "01",
      title: "Event Management",
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
      title: "Photography",
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
    title: "Contact Us",
    description: "Connect with us through our Contact Us page to explore how our expertise in online promotion can elevate your presence. We're here to answer your questions and discuss tailored solutions for your business.",
    page: "Contact Us"
  }

  footerData = {
    backExists: "0",
    wallpaper: ""
  }
}
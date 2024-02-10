import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-section-page-banner',
  templateUrl: './section-page-banner.component.html',
  styleUrls: ['./section-page-banner.component.css']
})
export class SectionPageBannerComponent implements OnInit {

  @Input() data: any;
  title: any;
  description: any;

  constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.route.queryParams.subscribe((params:any)=>{
        console.log(params);
        this.title= params.title;
        this.description =params.description;

      })
    }
}

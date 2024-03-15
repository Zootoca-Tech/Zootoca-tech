import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {

  Btn: boolean = true;
  
  constructor(private router: Router) {
     this.checkIfHomePage();
   }

  ngOnInit(): void {
  }
  
  checkIfHomePage() {
    const currentUrl = this.router.url.trim();
    const comparisonUrl = ['/services/service-detail', '/other/Contact-Us'];
    
    if (comparisonUrl.some(url => currentUrl.startsWith(url))) {
      this.Btn = false;
  } else {
      this.Btn = true;
  }
}
}

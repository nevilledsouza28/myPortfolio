import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface Details {
  number: string,
  email: string,
  dob: string,
  address: string
};

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.less'],
  encapsulation: ViewEncapsulation.None
})

export class AboutMeComponent implements OnInit {

  constructor() {}
  title = 'about me';
  details: Details = {
    number: "+91-9892761957",
    email: "nevilledsouza28@gmail.com",
    dob: "28th may, 1991",
    address: "mumbai-55, india"
  };

  ngOnInit() {}

}

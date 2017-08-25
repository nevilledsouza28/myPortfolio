import { Component, OnInit, ViewEncapsulation} from '@angular/core';

export interface Details {
  name: string,
  designation: string,
  description: string,
  companyName: string,
  number: string,
  email: string,
  dob: string,
  address: string
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {

  constructor() { }

  details: Details = {
      name: "Hi, I'm neville d'souza.",
      companyName: "BNP Paribas India Solutions",
      designation: "Software Engineer (Web Developer)",
      description: "I have diverse set of skills, ranging from HTML5 + CSS3 + Javascript, all the way to Angular JS 1.x/4, Typescript, Core Java and basics of Oracle SQL.",
      number: "+91-9892761957",
      email: "nevilledsouza28@gmail.com",
      dob: "28th may, 1991",
      address: "mumbai-55, india"
  };

  ngOnInit() {}

}

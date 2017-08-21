import { Component, OnInit, ViewEncapsulation} from '@angular/core';

export interface Menu{
  label: string,
  path: string,
}

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.less'],
  encapsulation: ViewEncapsulation.None
})

export class MenuHeaderComponent implements OnInit {

  constructor() { }

  isExpanded: boolean = false;
  activated: number = 0;
  myName: string = "neville d'souza";
  myDesignation: string = "web developer - BNP Paribas India Solutions.";

  items: Menu[];

  ngOnInit() {
      this.items = [
          {label: 'home', path: 'home'},
          {label: 'about', path: 'about'},
          {label: 'skills', path: 'skills'},
          {label: 'experience', path: 'exp'},
          {label: 'education', path: 'edu'},
          {label: 'contact', path: 'contact'}
      ];
  }
}

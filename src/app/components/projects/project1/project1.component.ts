import { Component, OnInit } from '@angular/core';


import { faDesktopAlt } from '@fortawesome/free-solid-svg-icons';
import { faTabletAlt } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.scss']
})
export class Project1Component implements OnInit {

  faTablet = faTabletAlt
  faMobile = faMobileScreen
  faDesktop = faDesktopAlt

  constructor() { }

  ngOnInit(): void {
  }

}

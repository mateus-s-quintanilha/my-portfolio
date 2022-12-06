import { Component, OnInit } from '@angular/core';

import { faDesktopAlt } from '@fortawesome/free-solid-svg-icons';
import { faTabletAlt } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-project3',
  templateUrl: './project3.component.html',
  styleUrls: ['./project3.component.scss']
})
export class Project3Component implements OnInit {

  faMobile = faMobileScreen
  faDesktop = faDesktopAlt 
  faTablet = faTabletAlt

  constructor() { }

  ngOnInit(): void {
  }

}

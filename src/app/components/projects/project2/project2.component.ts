import { Component, OnInit } from '@angular/core';

import { faDesktopAlt } from '@fortawesome/free-solid-svg-icons';
import { faTabletAlt } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-project2',
  templateUrl: './project2.component.html',
  styleUrls: ['./project2.component.scss']
})
export class Project2Component implements OnInit {

  faDesktop = faDesktopAlt
  faMobile= faMobileScreen
  faTablet = faTabletAlt

  constructor() { }

  ngOnInit(): void {
  }

}

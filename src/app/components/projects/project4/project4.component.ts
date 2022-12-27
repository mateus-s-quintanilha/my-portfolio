import { Component, OnInit } from '@angular/core';

import { faDesktopAlt, faTabletAlt, faMobileScreen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project4',
  templateUrl: './project4.component.html',
  styleUrls: ['./project4.component.scss']
})
export class Project4Component implements OnInit {

  faMobile = faMobileScreen
  faDesktop = faDesktopAlt
  faTablet = faTabletAlt

  constructor() { }

  ngOnInit(): void {
  }

}

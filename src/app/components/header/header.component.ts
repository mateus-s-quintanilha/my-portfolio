import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faBars = faBars

  public isCollapsed = false;


  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router
  ) { }


  ngOnInit(): void {

  }

  onClick(anchor: string) {
    this.viewportScroller.scrollToAnchor(anchor);
    if(this.router.url == '/project-1' || this.router.url == '/project-2' || this.router.url == '/project-3'){
      this.router.navigate([''])
    }
    
  }


}

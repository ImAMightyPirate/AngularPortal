import { Component, OnInit } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';

import { MenuToggleService } from './../services/menu-toggle.service';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuComponent implements OnInit {

  faBars = faBars;

  constructor(private menuToggleService: MenuToggleService) {   
  }

  ngOnInit() {
  }

  onMenuToggle() {
    this.menuToggleService.toggle();
  }

}
import { Component, OnInit } from '@angular/core';

import { faBox } from '@fortawesome/free-solid-svg-icons';

import { MenuItem } from './models/menu-item.model';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {

  faBox = faBox;

  private menuItems: Array<MenuItem>;

  constructor() {
    this.menuItems = new Array<MenuItem>();

    for (var i = 1; i < 6; i++) {
      let menuItem = new MenuItem("Module Name " + i, "/module" + i);
      this.menuItems.push(menuItem);
    } 
  }

  ngOnInit() {
  }

}
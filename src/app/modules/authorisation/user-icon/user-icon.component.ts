import { Component, OnInit } from '@angular/core';

import { faKey, faLock, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.css']
})
export class UserIconComponent implements OnInit {

  faKey = faKey;
  faLock = faLock;
  faSignOutAlt = faSignOutAlt;
  faUserCircle = faUserCircle;

  constructor() { }

  ngOnInit() {
  }

}
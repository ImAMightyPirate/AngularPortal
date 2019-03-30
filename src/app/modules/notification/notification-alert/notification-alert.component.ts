import { Component, OnInit } from '@angular/core';

import { faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notification-alert',
  templateUrl: './notification-alert.component.html',
  styleUrls: ['./notification-alert.component.css']
})
export class NotificationAlertComponent implements OnInit {

  faBell = faBell;

  constructor() { }

  ngOnInit() {
  }

}
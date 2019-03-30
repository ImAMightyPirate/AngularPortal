import { Component, OnInit } from '@angular/core';

import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.css']
})
export class UserIconComponent implements OnInit {

  faUserCircle = faUserCircle;

  constructor() { }

  ngOnInit() {
  }

}
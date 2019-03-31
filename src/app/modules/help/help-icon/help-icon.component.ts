import { Component, OnInit } from '@angular/core';

import { faBook, faInfoCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-help-icon',
  templateUrl: './help-icon.component.html',
  styleUrls: ['./help-icon.component.css']
})
export class HelpIconComponent implements OnInit {

  faBook = faBook;
  faInfoCircle = faInfoCircle;
  faQuestionCircle = faQuestionCircle;

  constructor() { }

  ngOnInit() {
  }

}
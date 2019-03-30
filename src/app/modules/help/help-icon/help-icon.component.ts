import { Component, OnInit } from '@angular/core';

import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-help-icon',
  templateUrl: './help-icon.component.html',
  styleUrls: ['./help-icon.component.css']
})
export class HelpIconComponent implements OnInit {

  faQuestionCircle = faQuestionCircle;

  constructor() { }

  ngOnInit() {
  }

}
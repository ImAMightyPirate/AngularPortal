import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

import { faCheck, faEyeSlash, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  faCheck = faCheck;
  faEyeSlash = faEyeSlash;
  faTimes = faTimes;

  constructor(private bottomSheetRef: MatBottomSheetRef<DetailComponent>) { 
  }

  ngOnInit() {
  }

}
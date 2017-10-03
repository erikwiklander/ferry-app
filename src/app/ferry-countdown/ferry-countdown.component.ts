import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ferry-countdown',
  templateUrl: './ferry-countdown.component.html',
  styleUrls: ['./ferry-countdown.component.css']
})
export class FerryCountdownComponent implements OnInit {

  selectedValue: string;

  wharfes = [
    {value: 'luma', viewValue: 'Luma'},
    {value: 'barnangen', viewValue: 'Barnängen'},
    {value: 'henriksdal', viewValue: 'Henriksdal'}
  ];

  constructor() { }

  ngOnInit() {
  }

}

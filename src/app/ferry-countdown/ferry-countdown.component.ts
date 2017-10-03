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
    {value: 'barn', viewValue: 'Barnängen'},
    {value: 'henr', viewValue: 'Henriksdal'}
  ];

  constructor() { }

  ngOnInit() {
  }

}

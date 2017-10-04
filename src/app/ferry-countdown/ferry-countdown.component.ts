import { TimetableService } from './../timetable.service';
import { Component, OnInit } from '@angular/core';
import { Departure } from './../departure.model';

@Component({
  selector: 'app-ferry-countdown',
  templateUrl: './ferry-countdown.component.html',
  styleUrls: ['./ferry-countdown.component.css']
})
export class FerryCountdownComponent implements OnInit {

  now: Date;
  nextDeparture: Departure;
  nextDepartureDate: Date;
  countdown: number;
  selectedValue: string;

  wharfes = [
    {value: 'luma', viewValue: 'Luma'},
    {value: 'barnangen', viewValue: 'Barnängen'},
    {value: 'henriksdal', viewValue: 'Henriksdal'}
  ];

  constructor(private ttService: TimetableService) { }

  ngOnInit() {
    this.now = new Date();

    window.setInterval(() => {
      this.now = new Date();
      this.nextDeparture = this.ttService.nextDeparture(this.now);
      this.nextDepartureDate = this.nextDeparture.date;
      this.countdown = this.nextDepartureDate.getTime() - this.now.getTime();
    }, 1000);


  }

}

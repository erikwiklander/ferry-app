import { TimetableService } from './../timetable.service';
import { Component, OnInit } from '@angular/core';
import { Departure } from './../departure.model';

@Component({
  selector: 'app-ferry-countdown',
  templateUrl: './ferry-countdown.component.html',
  styleUrls: ['./ferry-countdown.component.css']
})
export class FerryCountdownComponent implements OnInit {

  nextDeparture: Departure;
  nextDepartureDate: Date;
  nextDestination: string;
  countdown: number;
  from: string;

  wharfes = [
    { value: 'luma', viewValue: 'Luma' },
    { value: 'barnangen', viewValue: 'Barnängen' },
    { value: 'henriksdal', viewValue: 'Henriksdal' }
  ];

  constructor(private ttService: TimetableService) { }

  ngOnInit() {
    this.updateValues();
    window.setInterval(() => {
      this.updateValues();
    }, 1000);
  }

  updateValues() {
      const now = new Date();
      this.nextDeparture = this.ttService.nextDeparture(now);
      this.nextDepartureDate = this.nextDeparture.date;
      this.nextDestination = this.nextDeparture.route.to;
      this.countdown = this.nextDepartureDate.getTime() - now.getTime();
  }
}

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
  countdown: number;
  selectedValue: string;

  wharfes = [
    { value: 'luma', viewValue: 'Luma' },
    { value: 'barnangen', viewValue: 'Barnängen' },
    { value: 'henriksdal', viewValue: 'Henriksdal' }
  ];

  constructor(private ttService: TimetableService) { }

  ngOnInit() {

    window.setInterval(() => {
      const now = new Date();
      this.nextDeparture = this.ttService.nextDeparture(now);
      this.nextDepartureDate = this.nextDeparture.date;
      this.countdown = this.nextDepartureDate.getTime() - now.getTime();
    }, 1000);


  }

}

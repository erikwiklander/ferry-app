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
  from = 'luma';
  now: Date;

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

  onFromChanged(from: string) {
    this.from = from;
    this.updateValues();
  }

  updateValues() {
      const now = new Date();
      this.now = now;
      this.nextDeparture = this.ttService.nextDeparture(now, this.from);
  }
}

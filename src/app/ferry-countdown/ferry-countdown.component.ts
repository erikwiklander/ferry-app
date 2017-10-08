import { TimetableService } from './../timetable.service';
import { Component, OnInit } from '@angular/core';
import { Departure } from './../departure.model';

@Component({
  selector: 'app-ferry-countdown',
  templateUrl: './ferry-countdown.component.html',
  styleUrls: ['./ferry-countdown.component.css']
})
export class FerryCountdownComponent implements OnInit {

  departures: Departure[] = [];
  from = 'luma';
  nofDepartures = 1;

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
    this.nofDepartures = 1;
    this.updateValues();
  }

  updateValues() {
      const now = new Date();
      this.departures = this.ttService.nextDepartures(now, this.from, this.nofDepartures);
  }

  onClickShowMore() {
    this.nofDepartures++;
    this.updateValues();
    console.log('Show more');
  }

  onClickShowLess() {
    if (this.nofDepartures > 1) {
      this.departures.splice(-1, 1);
      this.nofDepartures--;
    }
  }

}

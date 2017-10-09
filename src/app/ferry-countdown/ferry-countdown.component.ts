import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { TimetableService } from './../timetable.service';
import { Departure } from './../departure.model';

@Component({
  selector: 'app-ferry-countdown',
  templateUrl: './ferry-countdown.component.html',
  styleUrls: ['./ferry-countdown.component.css']
})
export class FerryCountdownComponent implements OnInit, OnDestroy {

  departures: Departure[] = [];
  from = 'luma';
  nofDepartures = 1;
  intervalId: number;

  wharfes = [
    { value: 'luma', viewValue: 'Luma' },
    { value: 'barnangen', viewValue: 'Barnängen' },
    { value: 'henriksdal', viewValue: 'Henriksdal' }
  ];

  constructor(private ttService: TimetableService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if (this.route.snapshot.url && this.route.snapshot.url[0]) {
      this.from = this.route.snapshot.url[0].path;
    } else {
      this.from = 'luma';
    }

    this.updateValues();
    this.intervalId = window.setInterval(() => {
      this.updateValues();
    }, 1000);
  }

  ngOnDestroy() {
    window.clearInterval(this.intervalId);
  }

  onFromChanged(from: string) {
    this.router.navigate([from]);
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

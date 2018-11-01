import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { TimetableService } from './../timetable.service';
import { Departure } from './../departure.model';

@Component({
  selector: 'app-ferry-countdown',
  templateUrl: './ferry-countdown.component.html',
  styleUrls: ['./ferry-countdown.component.css']
})
export class FerryCountdownComponent implements OnInit {

  from = 'luma';
  nofDepartures = 1;
  departures: Observable<Departure[]>;

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

    this.departures = this.ttService.getDepartures();
    this.ttService.setFrom(this.from);
  }

  onClickShowMore() {
    this.ttService.setNum(++this.nofDepartures);
  }

  onClickShowLess() {
    if (this.nofDepartures > 1) {
      this.ttService.setNum(--this.nofDepartures);
    }
  }

}

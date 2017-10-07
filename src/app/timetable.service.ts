import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Route } from './route.model';
import { Departure } from './departure.model';

@Injectable()
export class TimetableService {

  timetable = {
    600: new Route('triangel', 6, 0),
    620: new Route('triangel', 6, 20),
    640: new Route('triangel', 6, 40),
    700: new Route('luma', 7, 0),
    705: new Route('henriksdal', 7, 5),
    710: new Route('luma', 7, 10),
    715: new Route('henriksdal', 7, 15),
    720: new Route('luma', 7, 20),
    725: new Route('henriksdal', 7, 25),
    730: new Route('luma', 7, 30),
    735: new Route('henriksdal', 7, 35),
    740: new Route('luma', 7, 40),
    745: new Route('henriksdal', 7, 45),
    750: new Route('luma', 7, 50),
    755: new Route('henriksdal', 7, 55),
    800: new Route('luma', 8, 0),
    805: new Route('henriksdal', 8, 5),
    810: new Route('luma', 8, 10),
    815: new Route('henriksdal', 8, 15),
    820: new Route('luma', 8, 20),
    825: new Route('henriksdal', 8, 25),
    830: new Route('luma', 8, 30),
    835: new Route('henriksdal', 8, 35),
    840: new Route('luma', 8, 40),
    845: new Route('henriksdal', 8, 45),
    850: new Route('luma', 8, 50),
    855: new Route('henriksdal', 8, 55),
    900: new Route('triangel', 9, 0),
    920: new Route('triangel', 9, 20),
    940: new Route('triangel', 9, 40),
    1000: new Route('triangel', 10, 0),
    1020: new Route('triangel', 10, 20),
    1040: new Route('triangel', 10, 40),
    1100: new Route('triangel', 11, 0),
    1120: new Route('triangel', 11, 20),
    1140: new Route('triangel', 11, 40),
    1200: new Route('triangel', 12, 0),
    1220: new Route('triangel', 12, 20),
    1240: new Route('triangel', 12, 40),
    1300: new Route('triangel', 13, 0),
    1320: new Route('triangel', 13, 20),
    1340: new Route('triangel', 13, 40),
    1420: new Route('triangel', 14, 20),
    1440: new Route('triangel', 14, 40),
    1500: new Route('triangel', 15, 0),
    1520: new Route('triangel', 15, 20),
    1540: new Route('triangel', 15, 40),
    1600: new Route('luma', 16, 0),
    1605: new Route('henriksdal', 16, 5),
    1610: new Route('luma', 16, 10),
    1615: new Route('henriksdal', 16, 15),
    1620: new Route('luma', 16, 20),
    1625: new Route('henriksdal', 16, 25),
    1630: new Route('luma', 16, 30),
    1635: new Route('henriksdal', 16, 35),
    1640: new Route('luma', 16, 40),
    1645: new Route('henriksdal', 16, 45),
    1650: new Route('luma', 16, 50),
    1655: new Route('henriksdal', 16, 55),
    1700: new Route('luma', 17, 0),
    1705: new Route('henriksdal', 17, 5),
    1710: new Route('luma', 17, 10),
    1715: new Route('henriksdal', 17, 15),
    1720: new Route('luma', 17, 20),
    1725: new Route('henriksdal', 17, 25),
    1730: new Route('luma', 17, 30),
    1735: new Route('henriksdal', 17, 35),
    1740: new Route('luma', 17, 40),
    1745: new Route('henriksdal', 17, 45),
    1750: new Route('luma', 17, 50),
    1755: new Route('henriksdal', 17, 55),
    1800: new Route('triangel', 18, 0),
    1820: new Route('triangel', 18, 20),
    1840: new Route('triangel', 18, 40),
    1900: new Route('triangel', 19, 0),
    1920: new Route('triangel', 19, 20),
    1940: new Route('triangel', 19, 40),
    2000: new Route('triangel', 20, 0),
    2020: new Route('triangel', 20, 20),
    2040: new Route('triangel', 20, 40),
    2100: new Route('triangel', 21, 0),
    2120: new Route('triangel', 21, 20),
    2140: new Route('triangel', 21, 40),
    2200: new Route('triangel', 22, 0),
    2220: new Route('triangel', 22, 20),
    2240: new Route('triangel', 22, 40),
    2300: new Route('triangel', 23, 0),
    2320: new Route('triangel', 23, 20),
    2340: new Route('triangel', 23, 40),
    2400: new Route('triangel', 0, 0)
  };

  nextDeparture(date: Date): Departure {

    let hour = date.getHours();
    if (hour === 0) {
      hour = 24;
    }

    const key = date.getHours() * 100 + date.getMinutes();

    for (const k in this.timetable) {
      if (key < +k) {
        const route = this.timetable[k];
        const depTime = new Date(date.getTime());
        depTime.setMilliseconds(0);
        depTime.setSeconds(0);
        depTime.setHours(route.hour);
        depTime.setMinutes(route.minute);
        return new Departure(depTime, this.timetable[k]);
      }
    }
  }

}

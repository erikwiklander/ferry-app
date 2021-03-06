import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { FerryRoute } from './ferry-route.model';
import { Departure } from './departure.model';

@Injectable()
export class TimetableService {

  private timetable = {
    'barnangen': {
      'weekday': {
        600: new FerryRoute('triangel', 6, 0),
        620: new FerryRoute('triangel', 6, 20),
        640: new FerryRoute('triangel', 6, 40),
        700: new FerryRoute('luma', 7, 0),
        705: new FerryRoute('henriksdal', 7, 5),
        710: new FerryRoute('luma', 7, 10),
        715: new FerryRoute('henriksdal', 7, 15),
        720: new FerryRoute('luma', 7, 20),
        725: new FerryRoute('henriksdal', 7, 25),
        730: new FerryRoute('luma', 7, 30),
        735: new FerryRoute('henriksdal', 7, 35),
        740: new FerryRoute('luma', 7, 40),
        745: new FerryRoute('henriksdal', 7, 45),
        750: new FerryRoute('luma', 7, 50),
        755: new FerryRoute('henriksdal', 7, 55),
        800: new FerryRoute('luma', 8, 0),
        805: new FerryRoute('henriksdal', 8, 5),
        810: new FerryRoute('luma', 8, 10),
        815: new FerryRoute('henriksdal', 8, 15),
        820: new FerryRoute('luma', 8, 20),
        825: new FerryRoute('henriksdal', 8, 25),
        830: new FerryRoute('luma', 8, 30),
        835: new FerryRoute('henriksdal', 8, 35),
        840: new FerryRoute('luma', 8, 40),
        845: new FerryRoute('henriksdal', 8, 45),
        850: new FerryRoute('luma', 8, 50),
        855: new FerryRoute('henriksdal', 8, 55),
        900: new FerryRoute('triangel', 9, 0),
        920: new FerryRoute('triangel', 9, 20),
        940: new FerryRoute('triangel', 9, 40),
        1000: new FerryRoute('triangel', 10, 0),
        1020: new FerryRoute('triangel', 10, 20),
        1040: new FerryRoute('triangel', 10, 40),
        1100: new FerryRoute('triangel', 11, 0),
        1120: new FerryRoute('triangel', 11, 20),
        1140: new FerryRoute('triangel', 11, 40),
        1200: new FerryRoute('triangel', 12, 0),
        1220: new FerryRoute('triangel', 12, 20),
        1240: new FerryRoute('triangel', 12, 40),
        1300: new FerryRoute('triangel', 13, 0),
        1320: new FerryRoute('triangel', 13, 20),
        1340: new FerryRoute('triangel', 13, 40),
        1420: new FerryRoute('triangel', 14, 20),
        1440: new FerryRoute('triangel', 14, 40),
        1500: new FerryRoute('triangel', 15, 0),
        1520: new FerryRoute('triangel', 15, 20),
        1540: new FerryRoute('triangel', 15, 40),
        1600: new FerryRoute('luma', 16, 0),
        1605: new FerryRoute('henriksdal', 16, 5),
        1610: new FerryRoute('luma', 16, 10),
        1615: new FerryRoute('henriksdal', 16, 15),
        1620: new FerryRoute('luma', 16, 20),
        1625: new FerryRoute('henriksdal', 16, 25),
        1630: new FerryRoute('luma', 16, 30),
        1635: new FerryRoute('henriksdal', 16, 35),
        1640: new FerryRoute('luma', 16, 40),
        1645: new FerryRoute('henriksdal', 16, 45),
        1650: new FerryRoute('luma', 16, 50),
        1655: new FerryRoute('henriksdal', 16, 55),
        1700: new FerryRoute('luma', 17, 0),
        1705: new FerryRoute('henriksdal', 17, 5),
        1710: new FerryRoute('luma', 17, 10),
        1715: new FerryRoute('henriksdal', 17, 15),
        1720: new FerryRoute('luma', 17, 20),
        1725: new FerryRoute('henriksdal', 17, 25),
        1730: new FerryRoute('luma', 17, 30),
        1735: new FerryRoute('henriksdal', 17, 35),
        1740: new FerryRoute('luma', 17, 40),
        1745: new FerryRoute('henriksdal', 17, 45),
        1750: new FerryRoute('luma', 17, 50),
        1755: new FerryRoute('henriksdal', 17, 55),
        1800: new FerryRoute('triangel', 18, 0),
        1820: new FerryRoute('triangel', 18, 20),
        1840: new FerryRoute('triangel', 18, 40),
        1900: new FerryRoute('triangel', 19, 0),
        1920: new FerryRoute('triangel', 19, 20),
        1940: new FerryRoute('triangel', 19, 40),
        2000: new FerryRoute('triangel', 20, 0),
        2020: new FerryRoute('triangel', 20, 20),
        2040: new FerryRoute('triangel', 20, 40),
        2100: new FerryRoute('triangel', 21, 0),
        2120: new FerryRoute('triangel', 21, 20),
        2140: new FerryRoute('triangel', 21, 40),
        2200: new FerryRoute('triangel', 22, 0),
        2220: new FerryRoute('triangel', 22, 20),
        2240: new FerryRoute('triangel', 22, 40),
        2300: new FerryRoute('triangel', 23, 0),
        2320: new FerryRoute('triangel', 23, 20),
        2340: new FerryRoute('triangel', 23, 40),
        2400: new FerryRoute('triangel', 0, 0)
      },
      'weekend': {
        700: new FerryRoute('triangel', 7, 0),
        720: new FerryRoute('triangel', 7, 20),
        740: new FerryRoute('triangel', 7, 40),
        800: new FerryRoute('triangel', 8, 0),
        820: new FerryRoute('triangel', 8, 20),
        840: new FerryRoute('triangel', 8, 40),
        900: new FerryRoute('triangel', 9, 0),
        920: new FerryRoute('triangel', 9, 20),
        940: new FerryRoute('triangel', 9, 40),
        1000: new FerryRoute('triangel', 10, 0),
        1020: new FerryRoute('triangel', 10, 20),
        1040: new FerryRoute('triangel', 10, 40),
        1100: new FerryRoute('triangel', 11, 0),
        1120: new FerryRoute('triangel', 11, 20),
        1140: new FerryRoute('triangel', 11, 40),
        1200: new FerryRoute('triangel', 12, 0),
        1220: new FerryRoute('triangel', 12, 20),
        1240: new FerryRoute('triangel', 12, 40),
        1300: new FerryRoute('triangel', 13, 0),
        1320: new FerryRoute('triangel', 13, 20),
        1340: new FerryRoute('triangel', 13, 40),
        1400: new FerryRoute('triangel', 14, 0),
        1420: new FerryRoute('triangel', 14, 20),
        1440: new FerryRoute('triangel', 14, 40),
        1500: new FerryRoute('triangel', 15, 0),
        1520: new FerryRoute('triangel', 15, 20),
        1540: new FerryRoute('triangel', 15, 40),
        1600: new FerryRoute('triangel', 16, 0),
        1620: new FerryRoute('triangel', 16, 20),
        1640: new FerryRoute('triangel', 16, 40),
        1700: new FerryRoute('triangel', 17, 0),
        1720: new FerryRoute('triangel', 17, 20),
        1740: new FerryRoute('triangel', 17, 40),
        1800: new FerryRoute('triangel', 18, 0),
        1820: new FerryRoute('triangel', 18, 20),
        1840: new FerryRoute('triangel', 18, 40),
        1900: new FerryRoute('triangel', 19, 0),
        1920: new FerryRoute('triangel', 19, 20),
        1940: new FerryRoute('triangel', 19, 40),
        2000: new FerryRoute('triangel', 20, 0),
        2020: new FerryRoute('triangel', 20, 20),
        2040: new FerryRoute('triangel', 20, 40),
        2100: new FerryRoute('triangel', 21, 0),
        2120: new FerryRoute('triangel', 21, 20),
        2140: new FerryRoute('triangel', 21, 40),
        2200: new FerryRoute('triangel', 22, 0),
        2220: new FerryRoute('triangel', 22, 20),
        2240: new FerryRoute('triangel', 22, 40),
        2300: new FerryRoute('triangel', 23, 0),
        2320: new FerryRoute('triangel', 23, 20),
        2340: new FerryRoute('triangel', 23, 40),
        2400: new FerryRoute('triangel', 0, 0),
      }
    },
      'luma': {
        'weekday': {
          605: new FerryRoute('triangel', 6, 5),
          625: new FerryRoute('triangel', 6, 25),
          645: new FerryRoute('triangel', 6, 45),
          705: new FerryRoute('barnangen', 7, 5),
          715: new FerryRoute('barnangen', 7, 15),
          725: new FerryRoute('barnangen', 7, 25),
          735: new FerryRoute('barnangen', 7, 35),
          745: new FerryRoute('barnangen', 7, 45),
          755: new FerryRoute('barnangen', 7, 55),
          805: new FerryRoute('barnangen', 8, 5),
          815: new FerryRoute('barnangen', 8, 15),
          825: new FerryRoute('barnangen', 8, 25),
          835: new FerryRoute('barnangen', 8, 35),
          845: new FerryRoute('barnangen', 8, 45),
          855: new FerryRoute('barnangen', 8, 55),
          905: new FerryRoute('triangel', 9, 5),
          925: new FerryRoute('triangel', 9, 25),
          945: new FerryRoute('triangel', 9, 45),
          1005: new FerryRoute('triangel', 10, 5),
          1025: new FerryRoute('triangel', 10, 25),
          1045: new FerryRoute('triangel', 10, 45),
          1105: new FerryRoute('triangel', 11, 5),
          1125: new FerryRoute('triangel', 11, 25),
          1145: new FerryRoute('triangel', 11, 45),
          1205: new FerryRoute('triangel', 12, 5),
          1225: new FerryRoute('triangel', 12, 25),
          1245: new FerryRoute('triangel', 12, 45),
          1305: new FerryRoute('triangel', 13, 5),
          1325: new FerryRoute('triangel', 13, 25),
          1345: new FerryRoute('triangel', 13, 45),
          1405: new FerryRoute('triangel', 14, 5),
          1425: new FerryRoute('triangel', 14, 25),
          1445: new FerryRoute('triangel', 14, 45),
          1505: new FerryRoute('triangel', 15, 5),
          1525: new FerryRoute('triangel', 15, 25),
          1545: new FerryRoute('triangel', 15, 45),
          1605: new FerryRoute('barnangen', 16, 5),
          1615: new FerryRoute('barnangen', 16, 15),
          1625: new FerryRoute('barnangen', 16, 25),
          1635: new FerryRoute('barnangen', 16, 35),
          1645: new FerryRoute('barnangen', 16, 45),
          1655: new FerryRoute('barnangen', 16, 55),
          1705: new FerryRoute('barnangen', 17, 5),
          1715: new FerryRoute('barnangen', 17, 15),
          1725: new FerryRoute('barnangen', 17, 25),
          1735: new FerryRoute('barnangen', 17, 35),
          1745: new FerryRoute('barnangen', 17, 45),
          1755: new FerryRoute('barnangen', 17, 55),
          1805: new FerryRoute('triangel', 18, 5),
          1825: new FerryRoute('triangel', 18, 25),
          1845: new FerryRoute('triangel', 18, 45),
          1905: new FerryRoute('triangel', 19, 5),
          1925: new FerryRoute('triangel', 19, 25),
          1945: new FerryRoute('triangel', 19, 45),
          2005: new FerryRoute('triangel', 20, 5),
          2025: new FerryRoute('triangel', 20, 25),
          2045: new FerryRoute('triangel', 20, 45),
          2105: new FerryRoute('triangel', 21, 5),
          2125: new FerryRoute('triangel', 21, 25),
          2145: new FerryRoute('triangel', 21, 45),
          2205: new FerryRoute('triangel', 22, 5),
          2225: new FerryRoute('triangel', 22, 25),
          2245: new FerryRoute('triangel', 22, 45),
          2305: new FerryRoute('triangel', 23, 5),
          2325: new FerryRoute('triangel', 23, 25),
          2345: new FerryRoute('triangel', 23, 45),
          2405: new FerryRoute('triangel', 0, 5)
        },
        'weekend': {
          705: new FerryRoute('triangel', 7, 5),
          725: new FerryRoute('triangel', 7, 25),
          745: new FerryRoute('triangel', 7, 45),
          805: new FerryRoute('triangel', 8, 5),
          825: new FerryRoute('triangel', 8, 25),
          845: new FerryRoute('triangel', 8, 45),
          905: new FerryRoute('triangel', 9, 5),
          925: new FerryRoute('triangel', 9, 25),
          945: new FerryRoute('triangel', 9, 45),
          1005: new FerryRoute('triangel', 10, 5),
          1025: new FerryRoute('triangel', 10, 25),
          1045: new FerryRoute('triangel', 10, 45),
          1105: new FerryRoute('triangel', 11, 5),
          1125: new FerryRoute('triangel', 11, 25),
          1145: new FerryRoute('triangel', 11, 45),
          1205: new FerryRoute('triangel', 12, 5),
          1225: new FerryRoute('triangel', 12, 25),
          1245: new FerryRoute('triangel', 12, 45),
          1305: new FerryRoute('triangel', 13, 5),
          1325: new FerryRoute('triangel', 13, 25),
          1345: new FerryRoute('triangel', 13, 45),
          1405: new FerryRoute('triangel', 14, 5),
          1425: new FerryRoute('triangel', 14, 25),
          1445: new FerryRoute('triangel', 14, 45),
          1505: new FerryRoute('triangel', 15, 5),
          1525: new FerryRoute('triangel', 15, 25),
          1545: new FerryRoute('triangel', 15, 45),
          1605: new FerryRoute('triangel', 16, 5),
          1625: new FerryRoute('triangel', 16, 25),
          1645: new FerryRoute('triangel', 16, 45),
          1705: new FerryRoute('triangel', 17, 5),
          1725: new FerryRoute('triangel', 17, 25),
          1745: new FerryRoute('triangel', 17, 45),
          1805: new FerryRoute('triangel', 18, 5),
          1825: new FerryRoute('triangel', 18, 25),
          1845: new FerryRoute('triangel', 18, 45),
          1905: new FerryRoute('triangel', 19, 5),
          1925: new FerryRoute('triangel', 19, 25),
          1945: new FerryRoute('triangel', 19, 45),
          2005: new FerryRoute('triangel', 20, 5),
          2025: new FerryRoute('triangel', 20, 25),
          2045: new FerryRoute('triangel', 20, 45),
          2105: new FerryRoute('triangel', 21, 5),
          2125: new FerryRoute('triangel', 21, 25),
          2145: new FerryRoute('triangel', 21, 45),
          2205: new FerryRoute('triangel', 22, 5),
          2225: new FerryRoute('triangel', 22, 25),
          2245: new FerryRoute('triangel', 22, 45),
          2305: new FerryRoute('triangel', 23, 5),
          2325: new FerryRoute('triangel', 23, 25),
          2345: new FerryRoute('triangel', 23, 45),
          2405: new FerryRoute('triangel', 0, 5),
        }
    },
    'henriksdal': {
      'weekday': {
        610: new FerryRoute('triangel', 6, 10),
        630: new FerryRoute('triangel', 6, 30),
        650: new FerryRoute('triangel', 6, 50),
        700: new FerryRoute('barnangen', 7, 0),
        710: new FerryRoute('barnangen', 7, 10),
        720: new FerryRoute('barnangen', 7, 20),
        730: new FerryRoute('barnangen', 7, 30),
        740: new FerryRoute('barnangen', 7, 40),
        750: new FerryRoute('barnangen', 7, 50),
        800: new FerryRoute('barnangen', 8, 0),
        810: new FerryRoute('barnangen', 8, 10),
        820: new FerryRoute('barnangen', 8, 20),
        830: new FerryRoute('barnangen', 8, 30),
        840: new FerryRoute('barnangen', 8, 40),
        850: new FerryRoute('barnangen', 8, 50),
        910: new FerryRoute('triangel', 9, 10),
        930: new FerryRoute('triangel', 9, 30),
        950: new FerryRoute('triangel', 9, 50),
        1010: new FerryRoute('triangel', 10, 10),
        1030: new FerryRoute('triangel', 10, 30),
        1050: new FerryRoute('triangel', 10, 50),
        1110: new FerryRoute('triangel', 11, 10),
        1130: new FerryRoute('triangel', 11, 30),
        1150: new FerryRoute('triangel', 11, 50),
        1210: new FerryRoute('triangel', 12, 10),
        1230: new FerryRoute('triangel', 12, 30),
        1250: new FerryRoute('triangel', 12, 50),
        1310: new FerryRoute('triangel', 13, 10),
        1330: new FerryRoute('triangel', 13, 30),
        1350: new FerryRoute('triangel', 13, 50),
        1410: new FerryRoute('triangel', 14, 10),
        1430: new FerryRoute('triangel', 14, 30),
        1450: new FerryRoute('triangel', 14, 50),
        1510: new FerryRoute('triangel', 15, 10),
        1530: new FerryRoute('triangel', 15, 30),
        1550: new FerryRoute('triangel', 15, 50),
        1600: new FerryRoute('barnangen', 16, 0),
        1610: new FerryRoute('barnangen', 16, 10),
        1620: new FerryRoute('barnangen', 16, 20),
        1630: new FerryRoute('barnangen', 16, 30),
        1640: new FerryRoute('barnangen', 16, 40),
        1650: new FerryRoute('barnangen', 16, 50),
        1700: new FerryRoute('barnangen', 17, 0),
        1710: new FerryRoute('barnangen', 17, 10),
        1720: new FerryRoute('barnangen', 17, 20),
        1730: new FerryRoute('barnangen', 17, 30),
        1740: new FerryRoute('barnangen', 17, 40),
        1750: new FerryRoute('barnangen', 17, 50),
        1810: new FerryRoute('triangel', 18, 10),
        1830: new FerryRoute('triangel', 18, 30),
        1850: new FerryRoute('triangel', 18, 50),
        1910: new FerryRoute('triangel', 19, 10),
        1930: new FerryRoute('triangel', 19, 30),
        1950: new FerryRoute('triangel', 19, 50),
        2010: new FerryRoute('triangel', 20, 10),
        2030: new FerryRoute('triangel', 20, 30),
        2050: new FerryRoute('triangel', 20, 50),
        2110: new FerryRoute('triangel', 21, 10),
        2130: new FerryRoute('triangel', 21, 30),
        2150: new FerryRoute('triangel', 21, 50),
        2210: new FerryRoute('triangel', 22, 10),
        2230: new FerryRoute('triangel', 22, 30),
        2250: new FerryRoute('triangel', 22, 50),
        2310: new FerryRoute('triangel', 23, 10),
        2330: new FerryRoute('triangel', 23, 30),
        2350: new FerryRoute('triangel', 23, 50),
        2410: new FerryRoute('triangel', 0, 10)
      },
      'weekend': {
        710: new FerryRoute('triangel', 7, 10),
        730: new FerryRoute('triangel', 7, 30),
        750: new FerryRoute('triangel', 7, 50),
        810: new FerryRoute('triangel', 8, 10),
        830: new FerryRoute('triangel', 8, 30),
        850: new FerryRoute('triangel', 8, 50),
        910: new FerryRoute('triangel', 9, 10),
        930: new FerryRoute('triangel', 9, 30),
        950: new FerryRoute('triangel', 9, 50),
        1010: new FerryRoute('triangel', 10, 10),
        1030: new FerryRoute('triangel', 10, 30),
        1050: new FerryRoute('triangel', 10, 50),
        1110: new FerryRoute('triangel', 11, 10),
        1130: new FerryRoute('triangel', 11, 30),
        1150: new FerryRoute('triangel', 11, 50),
        1210: new FerryRoute('triangel', 12, 10),
        1230: new FerryRoute('triangel', 12, 30),
        1250: new FerryRoute('triangel', 12, 50),
        1310: new FerryRoute('triangel', 13, 10),
        1330: new FerryRoute('triangel', 13, 30),
        1350: new FerryRoute('triangel', 13, 50),
        1410: new FerryRoute('triangel', 14, 10),
        1430: new FerryRoute('triangel', 14, 30),
        1450: new FerryRoute('triangel', 14, 50),
        1510: new FerryRoute('triangel', 15, 10),
        1530: new FerryRoute('triangel', 15, 30),
        1550: new FerryRoute('triangel', 15, 50),
        1610: new FerryRoute('triangel', 16, 10),
        1630: new FerryRoute('triangel', 16, 30),
        1650: new FerryRoute('triangel', 16, 50),
        1710: new FerryRoute('triangel', 17, 10),
        1730: new FerryRoute('triangel', 17, 30),
        1750: new FerryRoute('triangel', 17, 50),
        1810: new FerryRoute('triangel', 18, 10),
        1830: new FerryRoute('triangel', 18, 30),
        1850: new FerryRoute('triangel', 18, 50),
        1910: new FerryRoute('triangel', 19, 10),
        1930: new FerryRoute('triangel', 19, 30),
        1950: new FerryRoute('triangel', 19, 50),
        2010: new FerryRoute('triangel', 20, 10),
        2030: new FerryRoute('triangel', 20, 30),
        2050: new FerryRoute('triangel', 20, 50),
        2110: new FerryRoute('triangel', 21, 10),
        2130: new FerryRoute('triangel', 21, 30),
        2150: new FerryRoute('triangel', 21, 50),
        2210: new FerryRoute('triangel', 22, 10),
        2230: new FerryRoute('triangel', 22, 30),
        2250: new FerryRoute('triangel', 22, 50),
        2310: new FerryRoute('triangel', 23, 10),
        2330: new FerryRoute('triangel', 23, 30),
        2350: new FerryRoute('triangel', 23, 50),
        2410: new FerryRoute('triangel', 0, 10),
      }
    }
  };

  private departures = <BehaviorSubject<Departure[]>>new BehaviorSubject([]);
  public num = 1;
  public from: string;

  constructor() {
    setInterval(() => this.newValue(), 1000);
  }

  public setNum(num: number) {
    this.num = num;
    this.newValue();
  }

  public setFrom(from: string) {
    this.from = from;
    this.num = 1;
    this.newValue();
  }

  public getDepartures() {
    return this.departures;
  }

  private newValue() {
    if (this.from) {
      this.departures.next(this.nextDepartures(new Date(), this.from, this.num));
    }
  }

  nextDepartures(now: Date, from: string, nofDepartures: number): Departure[] {

    let d = now;
    const res = [];
    for (let i = 0; i < nofDepartures; i++) {
      const dep = this.nextDeparture(d, now, from);
      res.push(dep);
      d = dep.date;
    }

    return res;
  }

  private nextDeparture(date: Date, now: Date, from: string): Departure {

    let hour = date.getHours();
    if (hour === 0) {
      hour = 24;
    }

    let key = hour * 100 + date.getMinutes();

    // figure out if this is weekend or weekday
    let compDate = new Date(date.getTime());
    if (compDate.getHours() === 0) {
      // if just after midnight, counts as day before.. remove an hour
      compDate = new Date(compDate.getTime() - (60 * 60 * 1000));
    }

    let typeOfDay = (compDate.getDay() === 6 || compDate.getDay() === 0) ? 'weekend' : 'weekday';
    let curTable = this.timetable[from][typeOfDay];

    let route = this.innerNextDeparture(key, curTable);
    if (!route) {
      key = date.getHours() * 100 + date.getMinutes();
      typeOfDay = (date.getDay() === 6 || date.getDay() === 0) ? 'weekend' : 'weekday';
      curTable = this.timetable[from][typeOfDay];
      route = this.innerNextDeparture(key, curTable);
    }

    const depTime = new Date(date.getTime());
    depTime.setMilliseconds(0);
    depTime.setSeconds(0);
    depTime.setHours(route.hour);
    depTime.setMinutes(route.minute);
    if (depTime < date) {
     depTime.setTime(depTime.getTime() + (24 * 60 * 60 * 1000));
    }
    return new Departure(depTime, route, depTime.getTime() - now.getTime());
  }

  private innerNextDeparture(key: number, table: any): FerryRoute {
    for (const k in table) {
      if (key < +k) {
        return table[k];
      }
    }
  }

}

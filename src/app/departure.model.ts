import { FerryRoute } from './ferry-route.model';

export class Departure {
    constructor(public date: Date, public route: FerryRoute, public countdown: number) {}
}

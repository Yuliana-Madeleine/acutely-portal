import { Injectable } from '@angular/core';

@Injectable()
export class TotalRevenueService {

    private revenue: any [] = [
        {
            name: 'Akron',
            y: 10.57,
            drilldown: 'Akron'
        },
        {
            name: 'Location A',
            y: 62.74,
            drilldown: 'Location A'
        },
        {
            name: 'Branson',
            y: 7.23,
            drilldown: 'Branson'
        },
        {
            name: 'Corning',
            y: 5.58,
            drilldown: 'Corning'
        }
    ];

    constructor() {
        // console.log('Here service to draw total revenues graphs.');
    }

    getRevenue() {
        return this.revenue;
    }
}

export interface Revenue {
    name: string;
    y: string;
    drilldown: string;
}

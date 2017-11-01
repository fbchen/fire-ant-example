/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
    selector: 'fullcalendar-select-example',
    template: `
        <ant-alert>
        You selected date: {{value.format('YYYY-MM-DD')}}
        </ant-alert>
        <ant-fullcalendar
            [value]="value"
            (select)="onSelect($event)"
            (panelChange)="onPanelChange($event)">
        </ant-fullcalendar>
    `
})
export class FullCalendarSelectExample implements OnInit {

    public value: moment.Moment;
    public selectedValue: moment.Moment;

    constructor() {

    }

    ngOnInit(): void {
        this.value = moment('2017-01-25');
        this.selectedValue = moment('2017-01-25');
    }

    onSelect(value: moment.Moment): void {
        this.value = value;
        this.selectedValue = value;
    }

    onPanelChange(data: any): void {
        console.log(data);
    }

}

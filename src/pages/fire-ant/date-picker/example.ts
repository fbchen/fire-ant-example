/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractPage } from '../abstract-page';
import * as moment from 'moment';


@Component({
    templateUrl: 'example.html',
    encapsulation: ViewEncapsulation.None
})
export class DatePickerExample extends AbstractPage {

    public example1 = {
        value1: null,
        value2: null,
        value3: null,
        value4: null,
    };

    public example2 = {
        size: 'default',
        value1: null,
        value2: null,
        value3: null,
        value4: null,
    };

    public example3 = {
        disabled: true,
        value1: '2017-09-25',
        value2: '2017-09-25',
        value3: '2017-09-25',
        value4: ['2017-09-25', '2018-09-25'],
    };

    public example4 = {
        dateFormat: 'YYYY-MM-DD',
        monthFormat: 'YYYY-MM',
        value1: new Date(),
        value2: new Date(),
        value3: new Date(),
        value4: [new Date(), null],
    };

    public example5 = {
        value1: null,
        value2: null,
        value3: [],
    };

    public example6 = {
        value1: [],
        value2: [],
    };


    constructor(
        public element: ElementRef,
        public router: Router,
        public route: ActivatedRoute) {
        super(element, router, route);
    }

    onChange(date: moment.Moment): void {
        console.log('change value to',
            date != null && date.isValid() ? date.format('YYYY-MM-DD') : null,
            date);
    }

    onRangeChange(dates: moment.Moment[]): void {
        console.log('change value to', dates);
    }

    toggleDisable(): void {
        this.example3.disabled = !this.example3.disabled;
    }

    onFormatChange(format: string): void {
        if (format === 'YYYY-MM-DD') {
            this.example4.monthFormat = 'YYYY-MM';
        }
        if (format === 'YYYY/MM/DD') {
            this.example4.monthFormat = 'YYYY/MM';
        }
        if (format === 'DD/MM/YYYY') {
            this.example4.monthFormat = 'MM/YYYY';
        }
    }


    bindThis(fn: Function): Function {
        return fn.bind(this);
    }

    /** 模拟生成一个范围值 */
    range(start: number, end: number): number[] {
        const result: number[] = [];
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    }

    disabledDate(current: moment.Moment): boolean {
        // Can not select days before today and today
        return current && current.valueOf() < Date.now();
    }

    disabledDateTime(): any {
        return {
            disabledHours: () => this.range(0, 24).splice(4, 20),
            disabledMinutes: () => this.range(30, 60),
            disabledSeconds: () => [55, 56],
        };
    }

    disabledRangeTime(_: any, type: string): any {
        if (type === 'start') {
            return {
                disabledHours: () => this.range(0, 60).splice(4, 20),
                disabledMinutes: () => this.range(30, 60),
                disabledSeconds: () => [55, 56],
            };
        }
        return {
            disabledHours: () => this.range(0, 60).splice(20, 4),
            disabledMinutes: () => this.range(0, 31),
            disabledSeconds: () => [55, 56],
        };
    }


    getRangeButtons(): any[] {
        return [{
            text: '今天', start: moment(), end: moment()
        }, {
            text: '本月', start: moment(), end: moment().endOf('month')
        }];
    }

}

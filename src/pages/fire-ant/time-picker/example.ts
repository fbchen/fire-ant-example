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
export class TimePickerExample extends AbstractPage {

    public example1 = {
        value1: null,
        value2: null,
    };

    public example2 = {
        value1: '16:30:50',
        value2: '16:30:50',
        value3: '16:30:50',
        value4: '16:30',
        value5: '16:30',
        value6: '16:30',
    };

    public example3 = {
        value1: null
    };

    public example4 = {
        disabled: true,
        value1: null,
        value2: null,
    };

    public example5 = {
        value1: null,
        value2: null,
        value3: null
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

    toggleDisable(): void {
        this.example4.disabled = !this.example4.disabled;
    }



    /** 模拟生成一个范围值 */
    range(start: number, end: number): number[] {
        const result: number[] = [];
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    }

    disabledHours(): number[] {
        const hours = this.range(0, 24);
        hours.splice(20, 4);
        return hours;
    }

    disabledMinutes(hour: number): number[] {
        if (hour === 20) {
            return this.range(0, 31);
        } else if (hour === 23) {
            return this.range(30, 60);
        }
        return [];
    }

    bindThis(fn: Function): Function {
        return fn.bind(this);
    }

}

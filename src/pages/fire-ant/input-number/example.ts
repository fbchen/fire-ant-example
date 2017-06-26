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


@Component({
    templateUrl: 'example.html',
    encapsulation: ViewEncapsulation.None
})
export class InputNumberExample extends AbstractPage {

    public example1 = {
        value1: 3
    };

    public example2 = {
        value1: 3,
        disabled: true
    };

    public example3 = {
        value1: 3,
        value2: 3,
        value3: 3
    };

    public example4 = {
        value1: 3
    };

    public example5 = {
        value1: 1000,
        value2: 100
    };

    constructor(
        public element: ElementRef,
        public router: Router,
        public route: ActivatedRoute) {
        super(element, router, route);
    }

    onChange(event): void {
        console.log('change ', event);
    }



    formatter1(value: number): string {
        return `$ ${String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    }

    parser1(value: string): any {
        return value.replace(/[\$\s,]/g, '');
    }

    formatter2(value: number): string {
        return `${value}%`;
    }

    parser2(value: string): any {
        return value.replace('%', '');
    }
}

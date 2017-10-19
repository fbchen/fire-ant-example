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
export class RateExample extends AbstractPage {

    public example1 = {
        value1: 0
    };

    public example2 = {
        value1: 3
    };

    public example3 = {
        value1: 0,
        value2: 0,
        value3: 0
    };

    public example4 = {
        value1: 2.5
    };

    public example5 = {
        value1: 2
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


}

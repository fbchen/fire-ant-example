/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, ElementRef, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractPage } from '../abstract-page';


@Component({
    templateUrl: 'example.html',
    encapsulation: ViewEncapsulation.None
})
export class BadgeExample extends AbstractPage implements AfterViewInit {

    example1 = {
        count: 5,
        show: true
    };

    private timer: any;
    private counter = 1;

    constructor(
        public element: ElementRef,
        public router: Router,
        public route: ActivatedRoute) {
        super(element, router, route);
    }

    decline(): void {
        window.clearTimeout(this.timer);
        let count = this.example1.count - 1;
        if (count < 0) {
            count = 0;
        }
        this.example1.count = count;
    }

    increase(): void {
        window.clearTimeout(this.timer);
        const count = this.example1.count + 1;
        this.example1.count = count;
    }

    autoChangeCount(): void {
        this.timer = setTimeout(() => {
            const count = this.example1.count + this.counter;
            if (count >= 30) {
                this.counter = -1;
            }
            if (count <= 10) {
                this.counter = 1;
            }
            this.example1.count = count;
            this.autoChangeCount();
        }, 1500);
    }

    ngAfterViewInit(): void {
        this.autoChangeCount();
    }

    onChange(checked: boolean): void {
        this.example1.show = checked;
    }

}

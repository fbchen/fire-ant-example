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
export class DropdownExample extends AbstractPage {

    constructor(
        public element: ElementRef,
        public router: Router,
        public route: ActivatedRoute) {
        super(element, router, route);
    }

    onMenuClick(event): void {
        console.log(`Click on item ${event.key}`);
    }

    onButtonClick(event): void {
        console.log(`Click on button ${event}`);
    }


    menuClickHanlder(event: any): boolean {
        if (event.key === '3') {
            return true;
        }
        return false;
    }

    menuClickHanlder2(event: any): void {
        if (event.key !== '3') {
            const domEvent: Event = event.domEvent;
            domEvent.preventDefault();
        }
    }

}

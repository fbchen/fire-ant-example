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
export class PaginationExample extends AbstractPage {


    constructor(
        public element: ElementRef,
        public router: Router,
        public route: ActivatedRoute) {
            super(element, router, route);
    }

    onPageChange(page: number): void {
        console.log('page change: new page=' + page);
    }

    onShowSizeChange(size: number): void {
        console.log('size change: new size=' + size);
    }

}

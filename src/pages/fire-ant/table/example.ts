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
export class TableExample extends AbstractPage {



    constructor(
        public element: ElementRef,
        public router: Router,
        public route: ActivatedRoute) {
        super(element, router, route);
    }

    getExample1Data(): any[] {
        return [{
            name: '聂小倩', age: 20, address: 'New York No. 1 Lake Park'
        }, {
            name: '宁采臣', age: 40, address: 'New York No. 1 Lake Park'
        }, {
            name: '诸葛卧龙', age: 40, address: 'New York No. 1 Lake Park'
        }];
    }

}

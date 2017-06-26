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
export class LayoutExample extends AbstractPage {

    public collapsed = false;
    public mode = 'inline';

    public collapsed2 = false;

    constructor(
        public element: ElementRef,
        public router: Router,
        public route: ActivatedRoute) {
        super(element, router, route);
    }

    onCollapse(event): void {
        console.log('Collapse ', event.collapsed);
        this.mode = event.collapsed ? 'vertical' : 'inline';
    }

    toggle(): void {
        this.collapsed2 = !this.collapsed2;
    }

    onCollapse2(event): void {
        console.log('Collapsed=', event.collapsed, event.type);
    }
}

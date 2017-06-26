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
export class MenuExample extends AbstractPage {

    theme = 'dark';

    constructor(
        public element: ElementRef,
        public router: Router,
        public route: ActivatedRoute) {
        super(element, router, route);
    }

    onMenuClick(event): void {
        console.log('click ', event);
    }

    onSelect(event): void {
        console.log('select ', event);
    }

    onDeselect(event): void {
        console.log('deselect ', event);
    }

    onOpenChange(event): void {
        console.log(event);
        const openKeys: string[] = event.openKeys;
        if (openKeys.length) {
            const menu = event.menu;
            const lastOpenKey = openKeys[openKeys.length - 1];
            menu.openKeys = this.getAncestorKeys(lastOpenKey).concat(lastOpenKey);
        }
    }

    getAncestorKeys(key): string[] {
        const map = {
            sub3: ['sub2'],
        };
        return map[key] || [];
    }
}

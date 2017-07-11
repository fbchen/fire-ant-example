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
export class TabsExample extends AbstractPage {

    tabPosition = 'top';

    tabPosition2 = 'top';

    example2 = {
        newTabIndex: 0,
        panels: [
            { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
            { title: 'Tab 2', content: 'Content of Tab 2', key: '2', closable: true },
        ]
    };

    example3 = {
        newTabIndex: 0,
        panels: [
            { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
            { title: 'Tab 2', content: 'Content of Tab 2', key: '2', closable: true },
        ]
    };

    constructor(
        public element: ElementRef,
        public router: Router,
        public route: ActivatedRoute) {
        super(element, router, route);
    }

    onChange(event: any): void {
        console.log(event);
    }

    addNewTabPane(): void {
        const newKey = `newTab${this.example2.newTabIndex++}`;
        this.example2.panels.push({
            title: 'New Tab',
            content: 'Content of new Tab',
            key: newKey, closable: true
        });
    }

    onDelete(tabPane: any): void {
        const newArray = this.example2.panels.filter(item => {
            return item.key !== tabPane.key;
        });
        this.example2.panels = newArray;
    }

    addNewTabPane3(): void {
        const newKey = `newTab${this.example3.newTabIndex++}`;
        this.example3.panels.push({
            title: 'New Tab',
            content: 'Content of new Tab',
            key: newKey, closable: true
        });
    }

    onDelete3(tabPane: any): void {
        const newArray = this.example3.panels.filter(item => {
            return item.key !== tabPane.key;
        });
        this.example3.panels = newArray;
    }

}

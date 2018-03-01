/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, ViewEncapsulation } from '@angular/core';


const nodes = [{
    title: 'parent 1',
    expanded: true,
    children: [{
        title: 'parent 1-1',
        expanded: true,
        children: [{
            title: 'leaf'
        }, {
            title: 'leaf'
        }, {
            title: 'leaf'
        }]
    }, {
        title: 'parent 1-2',
        children: [{
            title: 'leaf'
        }]
    }, {
        title: 'parent 1-3',
        children: [{
            title: 'leaf'
        }, {
            title: 'leaf'
        }]
    }]
}];


@Component({
    selector: 'tree-demo-line',
    template: `
        <ant-tree [showLine]="true" (select)="onSelect($event)" [roots]="children"></ant-tree>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeDemoLine {

    /** 根结点 */
    public children = nodes;

    constructor() {

    }

    onSelect(event: any): void {
        console.log('onSelect', event);
    }

}

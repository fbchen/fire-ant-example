/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, ViewEncapsulation, AfterViewInit, ViewChild, TemplateRef } from '@angular/core';


@Component({
    selector: 'tree-demo-basic',
    templateUrl: 'tree.demo.basic.html',
    encapsulation: ViewEncapsulation.None
})
export class TreeDemoBasic implements AfterViewInit {

    @ViewChild('title') titleTemplate: TemplateRef<any>;

    /** 根结点 */
    public children = [];

    constructor() {

    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.children = [{
                title: 'parent 1',
                expanded: true,
                children: [{
                    title: 'parent 1-0',
                    disabled: true,
                    expanded: true,
                    checked: true,
                    children: [{
                        title: 'leaf',
                        disableCheckbox: true
                    }, {
                        title: 'leaf'
                    }]
                }, {
                    title: 'parent 1-1',
                    expanded: true,
                    checked: true,
                    children: [{
                        name: 'ddd',
                        title: this.titleTemplate
                    }, {
                        name: 'sss',
                        title: this.titleTemplate
                    }]
                }]
            }];
        }, 10);
    }

    onSelect(event: any): void {
        console.log('onSelect', event);
    }

    onCheck(event: any): void {
        console.log('onCheck', event);
    }

}

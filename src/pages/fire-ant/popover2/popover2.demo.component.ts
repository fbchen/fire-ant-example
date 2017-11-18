/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, ViewEncapsulation } from '@angular/core';

import { TestComponent } from './popover2.demo.component.component';

@Component({
    selector: 'popover2-demo-component',
    template: `
        <ant-popover2
            [nzTitle]="_title"
            nzTrigger="click"
            [nzComponent]="_nzComponent" [nzComponentData]="_nzComponentData">
            <ant-button ant-popover2 (click)="increase()">Click me</ant-button>
        </ant-popover2>
    `,
    encapsulation: ViewEncapsulation.None
})
export class Popover2DemoComponent {

    public _title = 'Title';

    private _count = 0;

    public _nzComponent = TestComponent;

    constructor() {

    }

    public get _nzComponentData(): any {
        if (this._count % 2 === 0) {
            return {
                name: 'Xiao Ming',
                age: 30
            };
        }
        return {
            name: '小明',
            age: 20
        };
    }

    public increase(): void {
        this._count++;
    }

}

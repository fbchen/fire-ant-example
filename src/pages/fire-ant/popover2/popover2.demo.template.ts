/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'popover2-demo-template',
    template: `
        <ant-popover2 [nzTitle]="_title" nzTrigger="click" [nzTemplateData]="_nzTemplateData">
            <ant-button ant-popover2 (click)="increase()">Click me</ant-button>
            <ng-template #nzTemplate let-data>
                <div> I am <b>{{data.name}}</b>, {{data.age}} years old.</div>
            </ng-template>
        </ant-popover2>
    `,
    encapsulation: ViewEncapsulation.None
})
export class Popover2DemoTemplate {

    public _title = 'Title';

    private _count = 0;

    constructor() {

    }

    public get _nzTemplateData(): any {
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

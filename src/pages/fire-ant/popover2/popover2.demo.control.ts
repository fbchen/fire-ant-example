/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'popover2-demo-control',
    template: `
        <ant-popover2 [nzTitle]="_title" nzTrigger="click" #popover>
            <ant-button ant-popover2>Click me</ant-button>
            <ng-template #nzTemplate>
                <a href="javascript:;" (click)="popover.hide()">hide</a>
            </ng-template>
        </ant-popover2>
    `,
    encapsulation: ViewEncapsulation.None
})
export class Popover2DemoControl {

    public _title = 'Title';

    constructor() {

    }

}

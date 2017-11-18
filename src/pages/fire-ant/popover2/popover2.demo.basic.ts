/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'popover2-demo-basic',
    template: `
        <ant-popover2 nzTitle="Title" nzContent="Content" (nzVisibleChange)="onVisibleChange($event)">
            <ant-button type="primary" ant-popover2>Hover me</ant-button>
        </ant-popover2>
    `,
    encapsulation: ViewEncapsulation.None
})
export class Popover2DemoBasic {

    constructor() {

    }

    onVisibleChange(visible: boolean): void {
        console.log(`popover is ${visible}`);
    }
}

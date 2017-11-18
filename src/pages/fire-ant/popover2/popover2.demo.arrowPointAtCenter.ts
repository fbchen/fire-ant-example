/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'popover2-demo-arrow-point-at-center',
    template: `
        <div class="popover-demo-arrow-point-at-center">
            <ant-popover2 [nzTitle]="_title" [nzContent]="_content" nzPlacement="topLeft">
                <ant-button ant-popover2>Align edge / 边缘对齐</ant-button>
            </ant-popover2>
            <ant-popover2 [nzTitle]="_title" [nzContent]="_content" nzPlacement="topLeft" [arrowPointAtCenter]="true">
                <ant-button ant-popover2>Arrow points to center / 箭头指向中心</ant-button>
            </ant-popover2>
        </div>
    `,
    encapsulation: ViewEncapsulation.None,
    styles: [`
        .popover-demo-arrow-point-at-center .ant-btn {
            margin-right: 8px;
            margin-bottom: 12px;
        }
    `]
})
export class Popover2DemoArrowPointAtCenter {

    public _title = 'Title';
    public _content = 'Content';

    constructor() {

    }

}

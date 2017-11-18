/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'popover2-demo-trigger',
    template: `
        <ant-popover2 [nzTitle]="_title" [nzContent]="_content" nzTrigger="hover">
            <ant-button ant-popover2>Hover me</ant-button>
        </ant-popover2>

        <ant-popover2 [nzTitle]="_title" [nzContent]="_content" nzTrigger="click">
            <ant-button ant-popover2>Click me</ant-button>
        </ant-popover2>

        <ant-popover2 [nzTitle]="_title" [nzContent]="_content" nzTrigger="focus">
            <ant-button ant-popover2 tabIndex="0">Focus me</ant-button>
        </ant-popover2>
    `,
    encapsulation: ViewEncapsulation.None
})
export class Popover2DemoTrigger {

    public _title = 'Title';
    public _content = 'Content';

    constructor() {

    }

}

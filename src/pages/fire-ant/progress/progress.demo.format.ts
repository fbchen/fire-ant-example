/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'progress-demo-format',
    templateUrl: 'progress.demo.format.html',
    encapsulation: ViewEncapsulation.None,
    styles: [`
        .ant-progress-circle,
        .ant-progress-line {
            margin-right: 8px;
            margin-bottom: 8px;
        }
    `]
})
export class ProgressDemoFormat {

    constructor() {

    }

    _format1(percent: number): string {
        return `${percent} Days`;
    }

    _format2(percent: number): string {
        return `Done`;
    }

}

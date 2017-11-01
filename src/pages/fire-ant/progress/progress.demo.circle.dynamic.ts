/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'progress-demo-circle-dynamic',
    templateUrl: 'progress.demo.circle.dynamic.html',
    encapsulation: ViewEncapsulation.None
})
export class ProgressDemoCircleDynamic {

    public percent = 0;

    constructor() {

    }

    _increase(): void {
        let percent = this.percent + 10;
        if (percent > 100) {
            percent = 100;
        }
        this.percent = percent;
    }

    _decline(): void {
        let percent = this.percent - 10;
        if (percent < 0) {
            percent = 0;
        }
        this.percent = percent;
    }


}

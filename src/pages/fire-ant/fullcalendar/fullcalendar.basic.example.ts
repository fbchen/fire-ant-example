/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component } from '@angular/core';


@Component({
    selector: 'fullcalendar-basic-example',
    template: `
        <ant-fullcalendar (panelChange)="onPanelChange($event)"></ant-fullcalendar>
    `
})
export class FullCalendarBasicExample {


    constructor() {

    }

    onPanelChange(data: any): void {
        console.log(data);
    }

}

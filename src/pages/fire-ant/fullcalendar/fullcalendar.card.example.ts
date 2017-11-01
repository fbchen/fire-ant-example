/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component } from '@angular/core';


@Component({
    selector: 'fullcalendar-card-example',
    template: `
        <div style="width: 290px; border: 1px solid #d9d9d9; border-radius: 4px;">
            <ant-fullcalendar [fullscreen]="false" (panelChange)="onPanelChange($event)"></ant-fullcalendar>
        </div>
    `
})
export class FullCalendarCardExample {


    constructor() {

    }

    onPanelChange(data: any): void {
        console.log(data);
    }

}

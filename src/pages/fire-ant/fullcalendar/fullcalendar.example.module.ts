/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* FireAnt Module */
import { AntModule } from 'fire-ant';

import { FullCalendarExample } from './example';
import { FullCalendarBasicExample } from './fullcalendar.basic.example';
import { FullCalendarNoticeExample } from './fullcalendar.notice.example';
import { FullCalendarCardExample } from './fullcalendar.card.example';
import { FullCalendarSelectExample } from './fullcalendar.select.example';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        AntModule
    ],
    declarations: [
        FullCalendarExample,
        FullCalendarBasicExample,
        FullCalendarNoticeExample,
        FullCalendarCardExample,
        FullCalendarSelectExample
    ],
    entryComponents: [
        FullCalendarExample
    ],
    providers: [

    ]
})
export class FullCalendarExampleModule {

}

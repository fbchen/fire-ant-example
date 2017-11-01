/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component } from '@angular/core';
import * as moment from 'moment';


@Component({
    selector: 'fullcalendar-notice-example',
    template: `
        <ant-fullcalendar>
            <ng-template #dateCellContentRender let-context>
                <ul class="events">
                    <li *ngFor="let item of _getListData(context.current)">
                        <span class="event-{{item.type}}">●</span>
                        {{item.content}}
                    </li>
                </ul>
            </ng-template>
            <ng-template #monthCellContentRender let-context>
                <div class="notes-month" *ngIf="_getMonthData(context.v.value) > 0">
                    <section>{{_getMonthData(context.v.value)}}</section>
                    <span>Backlog number</span>
                </div>
            </ng-template>
        </ant-fullcalendar>
    `,
    styles: [`
        .events {
            line-height: 24px;
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .events li {
            color: #999;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .events li span {
            vertical-align: middle;
        }

        .events li span:first-child {
            font-size: 9px;
            margin-right: 4px;
        }

        .event-warning {
            color: #fac450;
        }

        .event-normal {
            color: #108ee9;
        }

        .event-error {
            color: #f50;
        }

        .notes-month {
            text-align: center;
        }

        .notes-month section {
            font-size: 28px;
        }
    `]
})
export class FullCalendarNoticeExample {


    constructor() {

    }


    _getListData(value: moment.Moment): any[] {
        let listData;
        switch (value.date()) {
            case 8:
                listData = [
                    { type: 'warning', content: 'This is warning event.' },
                    { type: 'normal', content: 'This is usual event.' },
                ]; break;
            case 10:
                listData = [
                    { type: 'warning', content: 'This is warning event.' },
                    { type: 'normal', content: 'This is usual event.' },
                    { type: 'error', content: 'This is error event.' },
                ]; break;
            case 15:
                listData = [
                    { type: 'warning', content: 'This is warning event' },
                    { type: 'normal', content: 'This is very long usual event。。....' },
                    { type: 'error', content: 'This is error event 1.' },
                    { type: 'error', content: 'This is error event 2.' },
                    { type: 'error', content: 'This is error event 3.' },
                    { type: 'error', content: 'This is error event 4.' },
                ]; break;
            default:
        }
        return listData || [];
    }

    _getMonthData(value: moment.Moment): number {
        if (value.month() === 8) {
            return 1394;
        }
        return 0;
    }

}

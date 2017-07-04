/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractPage } from '../abstract-page';

import { Notification } from 'fire-ant';

@Component({
    templateUrl: 'example.html',
    encapsulation: ViewEncapsulation.None
})
export class NotificationExample extends AbstractPage {

    public placement: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' = 'topRight';

    constructor(
        public element: ElementRef,
        public router: Router,
        public route: ActivatedRoute,
        private notification: Notification) {
        super(element, router, route);
    }

    onClose(event: Event): void {
        console.log(event, 'I was closed.');
    }

    openNotification(): void {
        this.notification.open({
            message: 'Notification Title',
            // tslint:disable-next-line:max-line-length
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    }

    openNotificationWithIcon(type: string): void {
        this.notification[type]({
            message: 'Notification Title',
            // tslint:disable-next-line:max-line-length
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    }

    openNotificationWithNewIcon(): void {
        this.notification.open({
            message: 'Notification Title',
            // tslint:disable-next-line:max-line-length
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            icon: 'smile-circle',
            iconCls: 'smileIcon'
        });
    }

    openNotificationWithNewStyle(): void {
        this.notification.open({
            message: 'Notification Title',
            // tslint:disable-next-line:max-line-length
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            style: 'width: 600px; margin-left: -300px'
        });
    }

    openNotificationNotClose(): void {
        this.notification.open({
            message: 'Notification Title',
            // tslint:disable-next-line:max-line-length
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            duration: 0
        });
    }

    openNotificationWithBtn(): void {
        const notice = this.notification.open({
            message: 'Notification Title',
            // tslint:disable-next-line:max-line-length
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            duration: 0,
            btn: {
                type: 'primary',
                text: 'Confirm',
                click: () => {
                    notice.close();
                    console.log('you close the notice.');
                }
            }
        });
    }

    changePlacement(): void {
        this.notification.config({
            placement: this.placement
        });
    }
}

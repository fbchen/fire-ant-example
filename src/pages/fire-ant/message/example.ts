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

import { Message } from 'fire-ant';

@Component({
    templateUrl: 'example.html',
    encapsulation: ViewEncapsulation.None
})
export class MessageExample extends AbstractPage {


    constructor(
        public element: ElementRef,
        public router: Router,
        public route: ActivatedRoute,
        private message: Message) {
        super(element, router, route);
    }

    onClose(event: Event): void {
        console.log(event, 'I was closed.');
    }

    info(): void {
        this.message.info('This is a normal message');
    }

    success(): void {
        this.message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
    }

    show(type: string): void {
        if (type === 'success') {
            this.message.success('This is a message of success');
        }
        if (type === 'error') {
            this.message.error('This is a message of error');
        }
        if (type === 'warning') {
            this.message.warning('This is a message of warning');
        }
    }

    showLoading(): void {
        const notice = this.message.loading('Action in progress..', 0);
        // Dismiss manually and asynchronously
        setTimeout(() => {
            notice.close();
        }, 2500);
    }

}

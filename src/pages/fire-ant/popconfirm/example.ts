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
export class PopconfirmExample extends AbstractPage {



    constructor(
        public element: ElementRef,
        public router: Router,
        public route: ActivatedRoute,
        private message: Message) {
        super(element, router, route);
    }

    onConfirm(): void {
        this.message.success('Click on Yes');
    }

    onCancel(): void {
        this.message.success('Click on No');
    }

}

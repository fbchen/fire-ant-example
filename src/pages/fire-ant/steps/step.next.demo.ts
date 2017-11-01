/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, ElementRef, ViewEncapsulation } from '@angular/core';

import { Message } from 'fire-ant';


@Component({
    selector: 'step-next-demo',
    templateUrl: 'step.next.demo.html',
    encapsulation: ViewEncapsulation.None,
    styles: [`
        .steps-content {
            margin-top: 16px;
            border: 1px dashed #e9e9e9;
            border-radius: 6px;
            background-color: #fafafa;
            min-height: 200px;
            text-align: center;
            padding-top: 80px;
        }

        .steps-action {
            margin-top: 24px;
        }
    `]
})
export class StepNextDemo {

    public _current = 0;

    public _steps = [{
        title: 'First',
        content: 'First-content',
    }, {
        title: 'Second',
        content: 'Second-content',
    }, {
        title: 'Last',
        content: 'Last-content',
    }];

    constructor(
        public element: ElementRef,
        private message: Message) {
    }

    next() {
        this._current = this._current + 1;
    }

    prev() {
        this._current = this._current - 1;
    }

    done() {
        this.message.success('Processing complete!');
    }

}

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
import KeyCode from '../../../app/shared/utils/key.code';

@Component({
    templateUrl: 'example.html',
    encapsulation: ViewEncapsulation.None
})
export class InputExample extends AbstractPage {

    public example1 = {
        value: ''
    };

    public example2 = {
        value1: 'mysite',
        value2: 'mysite',
        value3: 'mysite',
        schema: 'http://',
        subfix: '.com'
    };

    public example3 = {
        value: ''
    };

    public example4 = {
        value1: '',
        value2: ''
    };

    public example5 = {
        username: ''
    };

    public example6 = {
        value1: '0571',
        value2: '26888888',
        value3: '0571',
        value4: '26888888',
        value5: 'Zhejiang',
        value6: 'Xihu District, Hangzhou',
        value7: 'Option1',
        value8: 'input content',
        value9: 100,
        value10: 'Option1-1',
        value11: 'Option2-1',

        value12: '1',
        value13: '',
        value14: ''

    };

    public example7 = {
        textarea: ''
    };

    public example8 = {
        num: ''
    };

    constructor(
        public element: ElementRef,
        public router: Router,
        public route: ActivatedRoute) {
        super(element, router, route);
    }

    onSearch(value): void {
        console.log('onSearch ', value);
    }


    emitUserName(): void {
        this.example5.username = '';
    }




    formatNumber(value) {
        value += '';
        const list = value.split('.');
        const prefix = list[0].charAt(0) === '-' ? '-' : '';
        let num = prefix ? list[0].slice(1) : list[0];
        let result = '';
        while (num.length > 3) {
            result = `,${num.slice(-3)}${result}`;
            num = num.slice(0, num.length - 3);
        }
        if (num) {
            result = num + result;
        }
        return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
    }

    getNumberTitle(): string {
        return this.formatNumber(this.example8.num) || 'Input a number';
    }

    onKeydownNum(event: KeyboardEvent): void {
        const pattern = (event.target as HTMLElement).getAttribute('pattern');
        const regex = new RegExp(pattern);
        const key = event.key;
        if (KeyCode.isTextModifyingKeyEvent(event) && regex.test(key)) {
            return;
        }
        event.preventDefault();
    }
}

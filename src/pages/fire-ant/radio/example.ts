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


@Component({
    templateUrl: 'example.html',
    encapsulation: ViewEncapsulation.None
})
export class RadioExample extends AbstractPage {

    public example1 = {
        value1: ''
    };

    public example2 = {
        disabled: true
    };

    public example3 = {
        group1: '1'
    };

    public example4 = {
        group1: '1'
    };


    public example5 = {
        group1: 'a',
        group2: 'a',
        group3: 'a'
    };

    public example6 = {
        group1: 'a',
        group2: 'a',
        group3: 'a'
    };

    constructor(
        public element: ElementRef,
        public router: Router,
        public route: ActivatedRoute) {
        super(element, router, route);
    }

    onChange(event): void {
        console.log('change ', event);
    }

    onCheckChange(checked: boolean): void {
        console.log('checked=', checked);
    }

    toggleDisabled(): void {
        this.example2.disabled = !this.example2.disabled;
    }

    onGroupChange(value: any): void {
        console.log('group change: ', value);
    }

}

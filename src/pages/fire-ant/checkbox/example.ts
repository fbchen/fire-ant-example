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
export class CheckboxExample extends AbstractPage {

    public example1 = {
        value1: ''
    };

    public example2 = {
        value1: '1',
        value2: '2'
    };

    public example3 = {
        checked: false,
        disabled: false
    };

    public example4 = {
        group1: ['Apple'],
        group2: ['Apple']
    };

    plainOptions = ['Apple', 'Pear', 'Orange'];

    public example5 = {
        indeterminate: true,
        checkAll: false,
        group1: ['Apple', 'Orange']
    };

    public example6 = {
        group1: []
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

    toggleChecked(): void {
        this.example3.checked = !this.example3.checked;
    }

    toggleDisable(): void {
        this.example3.disabled = !this.example3.disabled;
    }

    onCheckAll(checked: boolean): void {
        this.example5.group1 = checked ? this.plainOptions : [];
    }

    onGroupValueChange(value: any[]): void {
        const length = this.plainOptions.length;
        this.example5.indeterminate = value.length < length;
        this.example5.checkAll = value.length === length;
    }

}

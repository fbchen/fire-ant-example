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
import { FormDirective } from 'fire-ant';

@Component({
    templateUrl: 'example.html',
    encapsulation: ViewEncapsulation.None
})
export class FormExample extends AbstractPage {

    public exampleMessages = {
        username: { required: '用户名不能为空' },
        password: { required: '密码不能为空' }
    };
    public example1 = {
        username: '',
        password: ''
    };

    public example2 = {
        username: '',
        password: '',
        remember: 'true'
    };

    // example 3
    formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 14 },
        },
    };
    tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 14,
                offset: 6,
            },
        },
    };
    public example3 = {
        email: '',
        password: '',
        password2: '',
        nickname: '',
        residence: 'nanjing',
        phone: '',
        prefix: '86',
        website: '',
        captcha: '',
        agreement: ''
    };

    constructor(
        public element: ElementRef,
        public router: Router,
        public route: ActivatedRoute) {
        super(element, router, route);
    }


    public handleSubmit(form: FormDirective): void {
        if (!form.validate(this.exampleMessages)) {

        }
    }

    public handleSubmit2(form: FormDirective): void {
        if (!form.validate()) {

        }
    }
}

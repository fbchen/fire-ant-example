/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, ElementRef, ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractPage } from '../abstract-page';

import { ModalDialog, Modal, Message } from 'fire-ant';
import { ModalFormComponent } from './modal.form';

@Component({
    templateUrl: 'example.html',
    encapsulation: ViewEncapsulation.None
})
export class ModalExample extends AbstractPage {

    @ViewChild('example1Template', { read: TemplateRef })
    example1Template: TemplateRef<any>;

    @ViewChild('example2Template', { read: TemplateRef })
    example2Template: TemplateRef<any>;

    public data = {
        email: '32674406@qq.com',
        password: '1234567890',
        password2: '1234567890',
    };

    constructor(
        public element: ElementRef,
        public router: Router,
        public route: ActivatedRoute,
        private message: Message,
        private modal: Modal) {
        super(element, router, route);
    }


    showExample1Modal(event: Event): void {
        this.modal.open({
            title: 'Basic Modal',
            templateRef: this.example1Template,
            triggerEvent: event
        }).subscribe((result: { dialog: ModalDialog, event: Event, action: string }) => {
            if (result.action === 'OK') {
                console.log('你点击了【确定】');
            } else {
                console.log('你点击了【取消】');
            }
        }, (error) => {
            console.error(error);
        });
    }

    showExample2Modal(event: Event): void {
        this.modal.open({
            title: 'Basic Modal',
            templateRef: this.example2Template,
            triggerEvent: event,
            buttons: [
                { text: '全选', data: 'select-all' }
            ]
        }).subscribe((result: { dialog: ModalDialog, event: Event, button: any, action: string }) => {
            console.log(`你点击了【${result.button.text || '确定'}】`, result.button);
            result.button.loading = true;
            setTimeout(() => {
                result.button.loading = false;
                result.dialog.close();
            }, 3000);
        }, (error) => {
            console.error(error);
        });
    }

    showExample3Modal_1(event: Event): void {
        this.modal.open({
            title: '20px to Top',
            top: 20,
            templateRef: this.example2Template,
            triggerEvent: event
        }).subscribe((result: { dialog: ModalDialog, event: Event, action: string }) => {
            if (result.action === 'OK') {
                console.log('你点击了【确定】');
                result.dialog.close();
            } else {
                console.log('你点击了【取消】');
            }
        }, (error) => {
            console.error(error);
        });
    }

    showExample3Modal_2(event: Event): void {
        this.modal.open({
            title: 'Vertically centered modal dialog',
            wrapClassName: 'vertical-center-modal',
            templateRef: this.example2Template,
            triggerEvent: event
        }).subscribe((result: { dialog: ModalDialog, event: Event, action: string }) => {
            if (result.action === 'OK') {
                console.log('你点击了【确定】');
                result.dialog.close();
            } else {
                console.log('你点击了【取消】');
            }
        }, (error) => {
            console.error(error);
        });
    }


    info(): void {
        const title = 'This is a notification message';
        const content = 'some messages...some messages...';
        this.modal.info(content, title)
            .then((result: { dialog: ModalDialog, event: Event, action: string }) => {
                console.log('你点击了【确定】');
                result.dialog.close();
            }, (result: { dialog: ModalDialog, event: Event, action: string }) => {
                console.log('你点击了【取消】');
            });
    }

    success(): void {
        const title = 'This is a success message';
        const content = 'some messages...some messages...';
        this.modal.success(content, title)
            .then((result: { dialog: ModalDialog, event: Event, action: string }) => {
                console.log('你点击了【确定】');
                result.dialog.close();
            }, (result: { dialog: ModalDialog, event: Event, action: string }) => {
                console.log('你点击了【取消】');
            });
    }

    error(): void {
        const title = 'This is a error message';
        const content = 'some messages...some messages...';
        this.modal.error(content, title)
            .then((result: { dialog: ModalDialog, event: Event, action: string }) => {
                console.log('你点击了【确定】');
                result.dialog.close();
            }, (result: { dialog: ModalDialog, event: Event, action: string }) => {
                console.log('你点击了【取消】');
            });
    }

    warning(): void {
        const title = 'This is a warning message';
        const content = 'some messages...some messages...';
        this.modal.warning(content, title)
            .then((result: { dialog: ModalDialog, event: Event, action: string }) => {
                console.log('你点击了【确定】');
                result.dialog.close();
            }, (result: { dialog: ModalDialog, event: Event, action: string }) => {
                console.log('你点击了【取消】');
            });
    }

    confirm(): void {
        const title = 'Do you Want to delete these items?';
        const content = 'some messages...some messages...';
        this.modal.confirm(content, title)
            .then((result: { dialog: ModalDialog, event: Event, action: string }) => {
                console.log('你点击了【确定】');
                result.dialog.close();
            }, (result: { dialog: ModalDialog, event: Event, action: string }) => {
                console.log('你点击了【取消】');
            });
    }



    showExample5Modal(event: Event): void {
        this.modal.create(ModalFormComponent, {
            data: this.data
        }, {
            title: '请输入账号',
            width: 320,
            triggerEvent: event
        }).subscribe((result: { dialog: ModalDialog, event: Event, button: any, action: string }) => {
            console.log(`你点击了【${result.button.text || '确定'}】`, result.button);
            console.log(this.data);

            result.button.loading = true;
            setTimeout(() => {
                result.button.loading = false;
                result.dialog.close();
            }, 3000);
        }, (error) => {
            console.error(error);
        });
    }

}

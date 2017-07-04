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

import { Layer } from 'fire-ant';

@Component({
    templateUrl: 'example.html',
    encapsulation: ViewEncapsulation.None
})
export class DialogExample extends AbstractPage {


    constructor(
        public element: ElementRef,
        public router: Router,
        public route: ActivatedRoute,
        private layer: Layer) {
        super(element, router, route);
    }


    showAlert(): void {
        this.layer.showAlert('你好，我是提示信息!').then(() => {
            console.log('您刚刚选择了: OK');
        }, () => {
            console.log('您刚刚选择了: NO');
        });
    }

    showAlert2(): void {
        this.layer.showAlert('你好，我是提示信息!', '系统提示').then(() => {
            console.log('您刚刚选择了: OK');
        }, () => {
            console.log('您刚刚选择了: NO');
        });
    }


    showAlert3(type: string): void {
        this.layer[type]('你好，我是提示信息!', '系统提示').then(() => {
            console.log('您刚刚选择了: OK');
        }, () => {
            console.log('您刚刚选择了: NO');
        });
    }

    showAlert4(): void {
        this.layer.showAlert({
            content: '你好，我是提示信息!',
            title: '系统提示',
            icon: 'smile-circle',
            iconCls: 'smileIcon'
        }).then(() => {
            console.log('您刚刚选择了: OK');
        }, () => {
            console.log('您刚刚选择了: NO');
        });
    }

    showConfirm(): void {
        this.layer.showConfirm('是否删除记录?', '系统消息').then(() => {
            console.log('您刚刚选择了: OK');
        }, () => {
            console.log('您刚刚选择了: NO');
        });
    }

}

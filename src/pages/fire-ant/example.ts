/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';


// 推荐在入口文件全局设置 locale
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

@Component({
    selector: 'fire-ant-example',
    templateUrl: './example.html'
})
export class Example implements OnInit {

    @ViewChild('asidecontainer') asidecontainer: ElementRef;

    constructor(public element: ElementRef, private router: Router) {
    }

    ngOnInit(): void {

    }

    navigate($event): void {
        // debugger;
        const menus: NodeList = this.asidecontainer.nativeElement.querySelectorAll('.ant-menu-item-selected');
        for (let i = 0; i < menus.length; i++) {
            const el = menus.item(i) as HTMLElement;
            el.classList.remove('ant-menu-item-selected');
        }

        const el = $event.currentTarget as HTMLElement;
        const name: string = el.dataset['id'];
        this.router.navigate([name]);

        const link: HTMLElement = this.asidecontainer.nativeElement.querySelector('[data-id=' + name + ']');
        if (link) {
            link.parentElement.classList.add('ant-menu-item-selected');
        }
    }

}

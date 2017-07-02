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
export class AvatarExample extends AbstractPage {

    userList = ['U', 'Lucy', 'Tom', 'Edward'];
    colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

    example1 = {
        user: this.userList[0],
        color: this.colorList[0]
    };

    constructor(
        public element: ElementRef,
        public router: Router,
        public route: ActivatedRoute) {
        super(element, router, route);
    }

    changeUser(): void {
        let index = this.userList.indexOf(this.example1.user);
        index = index < this.userList.length - 1 ? index + 1 : 0;
        this.example1.user = this.userList[index];
        this.example1.color = this.colorList[index];
    }


}

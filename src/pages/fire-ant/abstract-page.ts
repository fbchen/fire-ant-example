/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

export abstract class AbstractPage implements OnInit {

    constructor(
        public element: ElementRef,
        public router: Router,
        public route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.url.forEach((value: UrlSegment[]) => {
            const name = value[0].path;
            const link: Element = document.querySelector('[data-id=' + name + ']');
            if (link) {
                link.parentElement.classList.add('ant-menu-item-selected');
            }
        });
    }

    home(): void {
        this.router.navigate(['/']);
    }
}

/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, ElementRef, ViewEncapsulation, Input } from '@angular/core';


@Component({
    templateUrl: './modal.form.html',
    encapsulation: ViewEncapsulation.None
})
export class ModalFormComponent {

    @Input() data: any = {};

    constructor(public element: ElementRef) {
    }


}

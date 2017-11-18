/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, Input, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'popover2-demo-component-component',
    template: `
        <div> I am <b>{{name}}</b>, {{age}} years old.</div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TestComponent {

    @Input() name: string;

    @Input() age: number;


    constructor() {

    }

}

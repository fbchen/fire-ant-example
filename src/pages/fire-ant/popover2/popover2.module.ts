/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* FireAnt Module */
import { AntModule } from 'fire-ant';

import { TestComponent } from './popover2.demo.component.component';

import { Popover2Example } from './example';
import { Popover2DemoBasic } from './popover2.demo.basic';
import { Popover2DemoPlacement } from './popover2.demo.placement';
import { Popover2DemoArrowPointAtCenter } from './popover2.demo.arrowPointAtCenter';
import { Popover2DemoTrigger } from './popover2.demo.trigger';
import { Popover2DemoControl } from './popover2.demo.control';
import { Popover2DemoTemplate } from './popover2.demo.template';
import { Popover2DemoComponent } from './popover2.demo.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        AntModule
    ],
    declarations: [
        Popover2Example,
        Popover2DemoBasic,
        Popover2DemoPlacement,
        Popover2DemoArrowPointAtCenter,
        Popover2DemoTrigger,
        Popover2DemoControl,
        Popover2DemoTemplate,
        Popover2DemoComponent,
        TestComponent
    ],
    entryComponents: [
        Popover2Example,
        TestComponent
    ],
    providers: [

    ]
})
export class Popover2ExampleModule {

}

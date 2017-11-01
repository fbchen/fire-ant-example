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
import { AntModule } from '../../../app/fire-ant';

import { ProgressExample } from './example';
import { ProgressDemoDynamic } from './progress.demo.dynamic';
import { ProgressDemoCircleDynamic } from './progress.demo.circle.dynamic';
import { ProgressDemoFormat } from './progress.demo.format';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        AntModule
    ],
    declarations: [
        ProgressExample,
        ProgressDemoDynamic,
        ProgressDemoCircleDynamic,
        ProgressDemoFormat
    ],
    entryComponents: [
        ProgressExample
    ],
    providers: [

    ]
})
export class ProgressExampleModule {

}

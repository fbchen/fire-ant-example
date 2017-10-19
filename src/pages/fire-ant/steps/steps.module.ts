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

import { StepsExample } from './example';
import { StepNextDemo } from './step-next-demo';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        AntModule
    ],
    declarations: [
        StepsExample,
        StepNextDemo
    ],
    entryComponents: [
        StepsExample,
        StepNextDemo
    ],
    providers: [

    ]
})
export class StepsExampleModule {

}

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

import { ModalExample } from './example';
import { ModalFormComponent } from './modal.form';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        AntModule
    ],
    declarations: [
        ModalExample,
        ModalFormComponent
    ],
    entryComponents: [
        ModalExample,
        ModalFormComponent
    ],
    providers: [

    ]
})
export class ModalExampleModule {

}

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

import { TreeExample } from './example';
import { TreeDemoBasic } from './tree.demo.basic';
import { TreeDemoLine } from './tree.demo.line';
import { TreeDemoDraggable } from './tree.demo.draggable';
import { TreeDemoDynamic } from './tree.demo.dynamic';
import { TreeDemoSearch } from './tree.demo.search';
import { TreeDemoContextMenu } from './tree.demo.context.menu';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        AntModule
    ],
    declarations: [
        TreeExample,
        TreeDemoBasic,
        TreeDemoLine,
        TreeDemoDynamic,
        TreeDemoDraggable,
        TreeDemoSearch,
        TreeDemoContextMenu
    ],
    entryComponents: [
        TreeExample
    ],
    providers: [

    ]
})
export class TreeExampleModule {

}

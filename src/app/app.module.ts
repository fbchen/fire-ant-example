/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';

/* FireAnt Module */
import { AntModule } from 'fire-ant';

/* FireAnt Example Module */
import { ExampleModule } from '../pages/fire-ant/example.module';
import { Example } from '../pages/fire-ant/example';


@NgModule({
    imports: [
        HttpModule,
        CoreModule,
        AntModule,
        ExampleModule,
        RouterModule.forRoot([])
    ],
    declarations: [
        // AppComponent
    ],
    entryComponents: [
        // AppComponent
    ],
    providers: [

    ],
    bootstrap: [
        Example
    ]
})
export class AppModule { }

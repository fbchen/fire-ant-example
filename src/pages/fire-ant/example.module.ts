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

import { ExampleRoutingModule } from './example.routing.module';
import { SharedModule } from '../../app/shared/shared.module';

/** FireAnt Demo Components */
import { Example } from './example';
import { ButtonExample } from './button/example';
import { IconExample } from './icon/example';
import { GridExample } from './grid/example';
import { TooltipExample } from './tooltip/example';
import { PopoverExample } from './popover/example';
import { PopconfirmExample } from './popconfirm/example';
import { MenuExample } from './menu/example';
import { BreadcrumbExample } from './breadcrumb/example';
import { SwitchExample } from './switch/example';
import { LayoutExample } from './layout/example';
import { DropdownExample } from './dropdown/example';
import { TagExample } from './tag/example';
import { InputExample } from './input/example';
import { SelectExample } from './select/example';
import { PaginationExample } from './pagination/example';
import { CheckboxExample } from './checkbox/example';
import { RadioExample } from './radio/example';
import { InputNumberExample } from './input-number/example';
import { AvatarExample } from './avatar/example';
import { BadgeExample } from './badge/example';
import { FormExample } from './form/example';
import { TableExample } from './table/example';
import { AlertExample } from './alert/example';
import { MessageExample } from './message/example';
import { NotificationExample } from './notification/example';
import { DialogExample } from './dialog/example';
import { TabsExample } from './tabs/example';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        SharedModule,
        AntModule,
        ExampleRoutingModule
    ],
    declarations: [
        Example,
        ButtonExample,
        IconExample,
        GridExample,
        TooltipExample,
        PopoverExample,
        PopconfirmExample,
        MenuExample,
        BreadcrumbExample,
        SwitchExample,
        LayoutExample,
        DropdownExample,
        TagExample,
        InputExample,
        SelectExample,
        PaginationExample,
        CheckboxExample,
        RadioExample,
        InputNumberExample,
        AvatarExample,
        BadgeExample,
        FormExample,
        TableExample,
        AlertExample,
        MessageExample,
        NotificationExample,
        DialogExample,
        TabsExample
    ],
    entryComponents: [
        Example,
        ButtonExample,
        IconExample,
        GridExample,
        TooltipExample,
        PopoverExample,
        PopconfirmExample,
        MenuExample,
        BreadcrumbExample,
        SwitchExample,
        LayoutExample,
        DropdownExample,
        TagExample,
        InputExample,
        SelectExample,
        PaginationExample,
        CheckboxExample,
        InputNumberExample,
        AvatarExample,
        BadgeExample,
        FormExample,
        TableExample,
        AlertExample,
        MessageExample,
        NotificationExample,
        DialogExample,
        TabsExample
    ],
    providers: [

    ]
})
export class ExampleModule {

}

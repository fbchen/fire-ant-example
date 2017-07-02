/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonExample } from './button/example';
import { IconExample } from './icon/example';
import { GridExample } from './grid/example';
import { TooltipExample } from './tooltip/example';
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

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'button', component: ButtonExample },
            { path: 'icon', component: IconExample },
            { path: 'grid', component: GridExample },
            { path: 'tooltip', component: TooltipExample},
            { path: 'menu', component: MenuExample },
            { path: 'breadcrumb', component: BreadcrumbExample },
            { path: 'switch', component: SwitchExample},
            { path: 'layout', component: LayoutExample},
            { path: 'dropdown', component: DropdownExample},
            { path: 'tag', component: TagExample},
            { path: 'input', component: InputExample},
            { path: 'select', component: SelectExample },
            { path: 'pagination', component: PaginationExample},
            { path: 'checkbox', component: CheckboxExample},
            { path: 'radio', component: RadioExample},
            { path: 'input-number', component: InputNumberExample},
            { path: 'avatar', component: AvatarExample},
            { path: 'badge', component: BadgeExample },
            { path: 'form', component: FormExample},
            { path: 'table', component: TableExample }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ExampleRoutingModule { }

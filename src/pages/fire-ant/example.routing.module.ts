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
import { ModalExample } from './modal/example';
import { CascaderExample } from './cascader/example';
import { DatePickerExample } from './date-picker/example';
import { TimePickerExample } from './time-picker/example';
import { RateExample } from './rate/example';
import { StepsExample } from './steps/example';
import { FullCalendarExample } from './fullcalendar/example';
import { SpinExample } from './spin/example';
import { ProgressExample } from './progress/example';
import { Popover2Example } from './popover2/example';
import { TreeExample } from './tree/example';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'button', component: ButtonExample },
            { path: 'icon', component: IconExample },
            { path: 'grid', component: GridExample },
            { path: 'tooltip', component: TooltipExample},
            { path: 'popover', component: PopoverExample },
            { path: 'popover2', component: Popover2Example },
            { path: 'popconfirm', component: PopconfirmExample },
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
            { path: 'table', component: TableExample },
            { path: 'alert', component: AlertExample },
            { path: 'message', component: MessageExample },
            { path: 'notification', component: NotificationExample },
            { path: 'dialog', component: DialogExample },
            { path: 'tabs', component: TabsExample },
            { path: 'modal', component: ModalExample },
            { path: 'cascader', component: CascaderExample },
            { path: 'date-picker', component: DatePickerExample },
            { path: 'time-picker', component: TimePickerExample },
            { path: 'rate', component: RateExample },
            { path: 'steps', component: StepsExample },
            { path: 'calendar', component: FullCalendarExample },
            { path: 'spin', component: SpinExample },
            { path: 'progress', component: ProgressExample },
            { path: 'tree', component: TreeExample },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ExampleRoutingModule { }

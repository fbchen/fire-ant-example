/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'popover2-demo-placement',
    template: `
        <div class="demo popover-demo-placement">

            <div [ngStyle]="{'margin-left': '70px', 'white-space': 'nowrap'}">
                <ant-popover2 [nzTitle]="_title" [nzContent]="_content" nzTrigger="click" nzPlacement="topLeft">
                    <ant-button ant-popover2>TL</ant-button>
                </ant-popover2>
                <ant-popover2 [nzTitle]="_title" [nzContent]="_content" nzTrigger="click" nzPlacement="top">
                    <ant-button ant-popover2>Top</ant-button>
                </ant-popover2>
                <ant-popover2 [nzTitle]="_title" [nzContent]="_content" nzTrigger="click" nzPlacement="topRight">
                    <ant-button ant-popover2>TR</ant-button>
                </ant-popover2>
            </div>
            <div [ngStyle]="{width: '70px', float: 'left'}">
                <ant-popover2 [nzTitle]="_title" [nzContent]="_content" nzTrigger="click" nzPlacement="leftTop">
                    <ant-button ant-popover2>LT</ant-button>
                </ant-popover2>
                <ant-popover2 [nzTitle]="_title" [nzContent]="_content" nzTrigger="click" nzPlacement="left">
                    <ant-button ant-popover2>Left</ant-button>
                </ant-popover2>
                <ant-popover2 [nzTitle]="_title" [nzContent]="_content" nzTrigger="click" nzPlacement="leftBottom">
                    <ant-button ant-popover2>LB</ant-button>
                </ant-popover2>
            </div>
            <div [ngStyle]="{width: '70px', 'margin-left': (70*4+24) + 'px'}">
                <ant-popover2 [nzTitle]="_title" [nzContent]="_content" nzTrigger="click" nzPlacement="rightTop">
                    <ant-button ant-popover2>RT</ant-button>
                </ant-popover2>
                <ant-popover2 [nzTitle]="_title" [nzContent]="_content" nzTrigger="click" nzPlacement="right">
                    <ant-button ant-popover2>Right</ant-button>
                </ant-popover2>
                <ant-popover2 [nzTitle]="_title" [nzContent]="_content" nzTrigger="click" nzPlacement="rightBottom">
                    <ant-button ant-popover2>RB</ant-button>
                </ant-popover2>
            </div>
            <div [ngStyle]="{'margin-left': '70px', 'clear': 'both', 'white-space': 'nowrap'}">
                <ant-popover2 [nzTitle]="_title" [nzContent]="_content" nzTrigger="click" nzPlacement="bottomLeft">
                    <ant-button ant-popover2>BL</ant-button>
                </ant-popover2>
                <ant-popover2 [nzTitle]="_title" [nzContent]="_content" nzTrigger="click" nzPlacement="bottom">
                    <ant-button ant-popover2>Bottom</ant-button>
                </ant-popover2>
                <ant-popover2 [nzTitle]="_title" [nzContent]="_content" nzTrigger="click" nzPlacement="bottomRight">
                    <ant-button ant-popover2>BR</ant-button>
                </ant-popover2>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None,
    styles: [`
        .popover-demo-placement .ant-btn {
            margin-right: 8px;
            margin-bottom: 8px;
        }

        .popover-demo-placement .ant-btn {
            width: 70px;
        }
    `]
})
export class Popover2DemoPlacement {

    public _title = 'Title';
    public _content = 'Content';

    constructor() {

    }

}

/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, ViewEncapsulation, OnInit, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { Tree, Message } from '../../../app/fire-ant';


@Component({
    selector: 'tree-demo-context-menu',
    templateUrl: 'tree.demo.context.menu.html',
    encapsulation: ViewEncapsulation.None,
    styles: [`
    .ant-menu.tree-context-menu {
        display: block;
        outline: none;
        position: relative;
        list-style-type: none;
        padding: 0;
        margin: 0;
        text-align: left;
        background-color: #fff;
        border-radius: 4px;
        -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2) !important;
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2) !important;
        background-clip: padding-box;
    }
    `]
})
export class TreeDemoContextMenu implements OnInit, OnDestroy {

    public children = [];

    @ViewChild('tree') tree: Tree;
    @ViewChild('menuExample') menuExample: TemplateRef<any>;

    private treeMenuRef: OverlayRef;

    private treeMenuNode: any;

    constructor(private messager: Message) {

    }

    ngOnInit(): void {
        this.generateData();
    }

    ngOnDestroy(): void {
        if (this.treeMenuRef) { // 释放菜单控件资源
            this.treeMenuRef.dispose();
        }
    }

    generateData(): void {
        for (let i = 0; i < 3; i++) {
            const node1 = {
                title: `${i}`,
                expanded: i === 0,
                children: []
            };
            this.children.push(node1);

            for (let j = 0; j < 3; j++) {
                const node2 = {
                    title: `${i}-${j}`,
                    expanded: i === 0 && j === 0,
                    children: []
                };
                node1.children.push(node2);

                for (let k = 0; k < 3; k++) {
                    const node3 = {
                        title: `${i}-${j}-${k}`
                    };
                    node2.children.push(node3);
                }
            }
        }
    }

    onNodeContextMenu(data: {event: Event, node: any}): void {
        const event = data.event as MouseEvent;
        event.preventDefault();
        this.treeMenuNode = data.node;

        // 打开右键菜单
        this.treeMenuRef = this.tree.openContextMenu(this.menuExample, event);
    }

    onMenuClick(title: string): void {
        this.treeMenuRef.dispose();
        this.treeMenuRef = null;
        this.messager.info(`You just click "${title}" on node "${this.treeMenuNode.title}"`);
    }

}

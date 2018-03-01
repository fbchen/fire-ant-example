/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { TreeNode } from '../../../app/fire-ant';


@Component({
    selector: 'tree-demo-draggable',
    templateUrl: 'tree.demo.draggable.html',
    encapsulation: ViewEncapsulation.None,
    styles: [`
      /* You can add the following CSS to your project to make draggable area bigger */
      .draggable-tree .ant-tree-node-content-wrapper {
        width: calc(100% - 18px);
      }
    `]
})
export class TreeDemoDraggable implements OnInit {

    public children = [];

    private dragNode: any;

    constructor() {

    }

    ngOnInit(): void {
        this.generateData();
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


    onDragStart(data: any): void {
        console.log('onDragStart', data);
        this.dragNode = data.node;
    }

    onDragEnter(data: any): void {
        // console.log('onDragEnter', data);
    }

    onDrop(e: any): void {
        console.log('onDrop', e);
        const dragNode = this.dragNode;
        const dropNode: TreeNode = e.node;
        const dropPosition = e.dropPosition;

        console.log('drag node =>[', dragNode.title, '] to =>[', dropNode.title, '] on position ', dropPosition);

        const dragParent: TreeNode = dragNode.parentNode;
        if (dropPosition === 0) { // 内部, 添加到尾部
            dragParent.removeChild(dragNode.data);
            dropNode.addChild(dragNode.data);
        } else if (dropPosition === 1) { // 下邻
            dragParent.removeChild(dragNode.data);
            const dropParent: TreeNode = dropNode.parentNode;
            dropParent.addChildAfter(dropNode.data, dragNode.data);
        } else { // 上邻
            dragParent.removeChild(dragNode.data);
            const dropParent: TreeNode = dropNode.parentNode;
            dropParent.addChildBefore(dropNode.data, dragNode.data);
        }
    }
}

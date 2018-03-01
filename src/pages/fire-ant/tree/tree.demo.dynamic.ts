/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, ViewEncapsulation } from '@angular/core';
import { TreeNode } from '../../../app/fire-ant';


const nodes = [{
    title: 'Expand to load',
    isLeaf: false
}, {
    title: 'Expand to load',
    isLeaf: false
}, {
    title: 'Leaf Node',
    isLeaf: true
}];

@Component({
    selector: 'tree-demo-dynamic',
    template: `
        <ant-tree [roots]="children" [loadData]="onLoadData"></ant-tree>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TreeDemoDynamic {

    public children = nodes;


    constructor() {

    }

    onLoadData(node: TreeNode): PromiseLike<any> {
        return new Promise((resolve) => {
            if (node.children) { // 已经有子结点
                resolve();
                return;
            }

            setTimeout(() => {
                node.children = [{
                    title: 'Child Node',
                    parentNode: node,
                    isLeaf: false
                }, {
                    title: 'Child Node',
                    parentNode: node,
                    isLeaf: false
                }];
                // 随机添加叶子结点
                if (Math.random() > 0.5) {
                    node.children.push({
                        title: 'Child Leaf',
                        parentNode: node,
                        isLeaf: true
                    });
                }

                resolve();
            }, 1000);
        });
    }
}

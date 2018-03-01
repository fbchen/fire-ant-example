/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, ViewEncapsulation, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Tree } from '../../../app/fire-ant';


@Component({
    selector: 'tree-demo-search',
    templateUrl: 'tree.demo.search.html',
    encapsulation: ViewEncapsulation.None
})
export class TreeDemoSearch implements OnInit {

    public children = [];

    public autoExpandParent = false;

    @ViewChild('tree') tree: Tree;
    @ViewChild('title') titleTemplate: TemplateRef<any>;


    constructor() {

    }

    ngOnInit(): void {
        this.generateData();
    }

    generateData(): void {
        for (let i = 0; i < 3; i++) {
            const node1 = {
                title: `${i}`,
                children: []
            };
            this.children.push(node1);

            for (let j = 0; j < 3; j++) {
                const node2 = {
                    title: `${i}-${j}`,
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

    onSearch(keyword: string): void {
        this.autoExpandParent = true;

        const parents: any[] = []; // 这是一个堆栈
        this.tree.traverse((node: any, i: number, array: any[]) => {
            if (node.children) { // 非叶子结点
                node.expanded = false;
                parents.push(node);
            }

            node.rowTitle = node.rowTitle || (node.rowTitle = node.title);
            const text: string = node.rowTitle;
            const index = keyword ? text.indexOf(keyword) : -1;
            if (index >= 0) {
                const titleData = {
                    beforeStr: text.substring(0, index),
                    afterStr: text.substring(index + keyword.length),
                    keyword
                };
                node.title = this.titleTemplate;
                node.titleData = titleData;

                // 展开父结点
                this.expand(parents);
            } else {
                node.title = text;
                node.titleData = null;
            }

            // 是否弹出最后一个parent
            if (i === array.length - 1 && !node.children) {
                parents.pop(); // 弹出堆栈的最后一个结点
            }
        });
    }

    expand(parents: any[]): void {
        parents.forEach(p => {
            p.expanded = true;
        });
    }

}

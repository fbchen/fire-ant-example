/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractPage } from '../abstract-page';


@Component({
    templateUrl: 'example.html',
    encapsulation: ViewEncapsulation.None
})
export class CascaderExample extends AbstractPage {

    public options = [{
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [{
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [{
                value: 'xihu',
                label: 'West Lake',
                isLeaf: true
            }],
        }],
    }, {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [{
            value: 'nanjing',
            label: 'Nanjing',
            children: [{
                value: 'zhonghuamen',
                label: 'Zhong Hua Men',
                isLeaf: true
            }],
        }],
    }, {
        value: 'fujian',
        label: 'Fujian',
        children: [{
            value: 'xiamen',
            label: 'Xiamen',
            children: [{
                value: 'gulangyu',
                label: 'Gu Lang Yu',
                isLeaf: true
            }],
        }],
    }];

    public options2 = [{
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [{
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [{
                value: 'xihu',
                label: 'West Lake',
                isLeaf: true
            }],
        }],
    }, {
        value: 'jiangsu',
        label: 'Jiangsu',
        disabled: true,
        children: [{
            value: 'nanjing',
            label: 'Nanjing',
            children: [{
                value: 'zhonghuamen',
                label: 'Zhong Hua Men',
                isLeaf: true
            }],
        }],
    }, {
        value: 'fujian',
        label: 'Fujian',
        children: [{
            value: 'xiamen',
            label: 'Xiamen',
            children: [{
                value: 'gulangyu',
                label: 'Gu Lang Yu',
                isLeaf: true
            }],
        }],
    }];

    public example1 = {
        value: []
    };

    public example2 = {
        value: []
    };

    public example3 = {
        value1: [],
        value2: [],
        value3: []
    };

    public example4 = {
        value: []
    };

    public example5 = {
        value: ['zhejiang', 'hangzhou', 'xihu']
    };

    public example6 = {
        value: []
    };

    public example7 = {
        value: []
    };

    public example8 = {
        value: []
    };



    constructor(
        public element: ElementRef,
        public router: Router,
        public route: ActivatedRoute) {
        super(element, router, route);
    }


    onChange(value: any): void {
        console.log('new value:', value);
    }

    onSelect(result: {
        option: any, index: number,
        resolve: (children: any[]) => void,
        reject: (value: any) => void
    }): void {
        const option = result.option;
        if (option.children) {
            result.resolve(option.children);
        }
    }

    onSearch(term: string): void {
        console.log('search:', term);
    }

    /**
     * 实现动态加载选项。(模拟异步)
     */
    onSelect2(result: {
        option: any, index: number,
        resolve: (children: any[]) => void,
        reject: (value: any) => void
    }): void {
        const option = result.option;
        option.loading = true;
        setTimeout(() => {
            option.loading = false;
            result.resolve(option.children);
        }, 1000);
    }
}

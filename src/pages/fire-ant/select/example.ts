/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, ElementRef, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http/*, Response, Headers*/ } from '@angular/http';
import { AbstractPage } from '../abstract-page';

import { Select, Option } from 'fire-ant';

const provinceList = ['Zhejiang', 'Jiangsu'];
const cityList = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
};

@Component({
    templateUrl: 'example.html',
    encapsulation: ViewEncapsulation.None
})
export class SelectExample extends AbstractPage implements AfterViewInit {

    public example1 = {
        value1: 'lucy',
        value2: 'lucy'
    };

    public example2 = {
        value1: null
    };

    public example3 = {
        value1: 'lucy'
    };

    public example4 = {
        value1: ''
    };

    public example5 = {
        value1: ['a10', 'c12']
    };

    public example6 = {
        size: 'default',
        value1: 'a10',
        value2: 'a10',
        value3: ['a10', 'c12'],
        value4: ['a10', 'c12']
    };


    public example7 = {
        value1: ''
    };

    public example8 = {
        value1: ''
    };

    public example9 = {
        province: provinceList[0],
        city: cityList[provinceList[0]][0]
    };

    @ViewChild('select7') public select7: Select;
    @ViewChild('select8') public select8: Select;

    @ViewChild('select91') public provSelector: Select;
    @ViewChild('select92') public citySelector: Select;

    constructor(
        public element: ElementRef,
        public router: Router,
        public route: ActivatedRoute,
        private http: Http) {
        super(element, router, route);
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            const provinceData = [];
            provinceList.forEach(province => {
                provinceData.push({
                    value: province,
                    text: province
                });
            });
            this.provSelector.setData(provinceData);

            const cityData = [];
            cityList[provinceList[0]].forEach(city => {
                cityData.push({
                    value: city,
                    text: city
                });
            });
            this.citySelector.setData(cityData);
        }, 1);
    }

    onChange(event): void {
        console.log('change ', event);
    }

    myFilterFunction(input: string, option: Option): boolean {
        return option.text.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }

    getNumRange(): string[] {
        const result = [];
        for (let i = 10; i < 36; i++) {
            result.push(i.toString(36) + i);
        }
        return result;
    }

    fetchData(term: string): void {
        if (term) {
            /*
            const params = 'code=utf-8&q=' + encodeURIComponent(term);
            const url = `https://suggest.taobao.com/sug?${params}`;
            this.http.get(url, {
                headers: new Headers({
                    'Access-Control-Allow-Origin': 'http://localhost:4200/select',
                    'Access-Control-Allow-Methods': 'GET,OPTIONS,HEAD'
                })
            }).subscribe((response: Response) => {
                const j = response.json();
                const result: any[] = j.result;
                const data = [];
                result.forEach(item => {
                    data.push({ value: item[0], text: item[0] });
                });
                this.select.setData(data);
            });
            */
            setTimeout(() => {
                const data = [];
                const count = Math.random() * 20;
                for (let i = 0; i < count; i++) {
                    data.push( { text: term + (i + 1), value: term + (i + 1) });
                }
                this.select7.setData(data);
            }, 50);
        }
    }

    rebuildAccountData(term: string): void {
        const data = [];
        if (term && term.indexOf('@') === -1) {
            ['gmail.com', '163.com', 'qq.com'].map((domain) => {
                const email = `${term}@${domain}`;
                data.push( { text: email, value: email });
            });
        }
        this.select8.setData(data);
    }

    onChangeProvince(option: Option): void {
        const cityData = [];
        cityList[option.value].forEach(city => {
            cityData.push({
                value: city,
                text: city
            });
        });
        this.example9.city = cityList[option.value][0];
        this.citySelector.setData(cityData);
    }

}

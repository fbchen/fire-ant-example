/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, ElementRef, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractPage } from '../abstract-page';

const tagsFromServer = ['Movie', 'Books', 'Music'];

@Component({
    templateUrl: 'example.html',
    encapsulation: ViewEncapsulation.None
})
export class TagExample extends AbstractPage {

    /** EditableTagGroup Example begin */
    public tags = ['Unremovable', 'Tag 2', 'Tag 3'];
    public inputVisible = false;
    public inputValue = '';
    @ViewChild('input') input: ElementRef;
    /** EditableTagGroup Example end */

    /** HotTags Example begin */
    public hotTags = tagsFromServer;
    public selectedTags = [];
    /** HotTags Example end  */

    /** 实现类似 Checkbox 的效果 begin */
    public tagState = {
        tag1Checked: true,
        tag2Checked: true,
        tag3Checked: true
    };
    /** 实现类似 Checkbox 的效果 end */

    constructor(
        public element: ElementRef,
        public router: Router,
        public route: ActivatedRoute) {
        super(element, router, route);
    }

    beforeClose(event): void {
        console.log('beforeClose ', event);
    }

    afterClose(event): void {
        console.log('afterClose ', event);
    }

    preventDefault(event: Event): void {
        event.preventDefault();
        console.log('Clicked! But prevent default.');
    }

    /** EditableTagGroup Example begin */
    handleClose(removedTag): void {
        this.tags = this.tags.filter(tag => tag !== removedTag);
    }

    sliceTagName(tag: string): string {
        const isLongTag = tag.length > 20;
        return isLongTag ? `${tag.slice(0, 20)}...` : tag;
    }

    showInput(): void {
        this.inputVisible = true;
        setTimeout(() => {
            this.input.nativeElement.focus();
        }, 10);
    }

    handleInputConfirm(): void {
        if (this.inputValue) {
            this.tags.push(this.inputValue);
        }
        this.inputValue = '';
        this.inputVisible = false;
    }
    /** EditableTagGroup Example end */

    /** HotTags Example begin */
    handleChange(checked: boolean, tag: string): void {
        if (checked) {
            this.selectedTags.push(tag);
        } else {
            this.selectedTags = this.selectedTags.filter(t => t !== tag);
        }
        console.log('You are interested in: ', this.selectedTags);
    }
    /** HotTags Example end  */
}

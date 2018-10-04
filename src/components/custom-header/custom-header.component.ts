import { Component, Input } from '@angular/core';

@Component({
    selector: 'custom-header',
    templateUrl: './custom-header.component.html'
})
export class CustomHeaderComponent {

    @Input('show-search') showSearch: boolean;
    @Input('title') title: string = null;

    constructor() { }

    ngOnInit() { }

    searched() {

    }
}

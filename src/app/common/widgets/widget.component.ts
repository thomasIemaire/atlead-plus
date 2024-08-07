import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-widget',
    templateUrl: './widget.component.html',
    styleUrl: './widget.component.scss'
})
export class WidgetComponent implements OnInit {

    @Input({ required: true }) id: string = '';
    @Input({ required: true }) rule: string = '';

    public type: string = '';

    constructor() {}

    ngOnInit(): void {
        this.type = this.id.split(':')[0];
    }

}

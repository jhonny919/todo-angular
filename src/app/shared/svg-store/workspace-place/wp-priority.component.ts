import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-wp-priority',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            svg {
                width: 100%;
                height: 100%;

                fill: #808080;

                cursor: pointer;
                &:hover {
                    background-color: #ececec;
                    fill: black;
                }
            }
        `,
    ],
    template: `
        <svg [class]="styleCls" viewBox="0 0 24 24">
            <path
                fill-rule="nonzero"
                d="M5 13.777V19.5a.5.5 0 1 1-1 0V5a.5.5 0 0 1 .223-.416C5.313 3.857 6.742 3.5 8.5 3.5c1.113 0 1.92.196 3.658.776C13.796 4.82 14.53 5 15.5 5c1.575 0 2.813-.31 3.723-.916A.5.5 0 0 1 20 4.5V13a.5.5 0 0 1-.223.416c-1.09.727-2.519 1.084-4.277 1.084-1.113 0-1.92-.196-3.658-.776C10.204 13.18 9.47 13 8.5 13c-1.45 0-2.614.262-3.5.777zm0-1.123C5.965 12.216 7.133 12 8.5 12c1.113 0 1.92.196 3.658.776 1.638.545 2.371.724 3.342.724 1.45 0 2.614-.262 3.5-.777V5.346c-.965.438-2.133.654-3.5.654-1.113 0-1.92-.196-3.658-.776C10.204 4.68 9.47 4.5 8.5 4.5c-1.45 0-2.614.262-3.5.777v7.377z"
            ></path>
        </svg>
    `,
})
export class WpPriorityComponent implements OnInit {
    @Input() styleCls = '';

    constructor() {}

    ngOnInit(): void {}
}
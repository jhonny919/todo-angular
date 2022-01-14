import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lm-more',
    styles: [
        `
            svg {
                width: 100%;
                height: 100%;

                padding: 10px 4px;

                fill: #aaa;

                display: none;

                &:hover {
                    fill: #202020;
                }
            }
        `,
    ],
    template: `
        <svg>
            <path
                fill-rule="evenodd"
                d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
            ></path>
        </svg>
    `,
})
export class LmMoreComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'svg-drop-edit',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            svg {
                width: 100%;
                height: 100%;
            }
        `
    ],
    template: `
        <svg>
            <g fill="none" fill-rule="evenodd">
                <path fill="#888" d="M9.5 19h10a.5.5 0 110 1h-10a.5.5 0 110-1z"></path>
                <path
                    stroke="#888"
                    d="M4.42 16.03a1.5 1.5 0 00-.43.9l-.22 2.02a.5.5 0 00.55.55l2.02-.21a1.5 1.5 0 00.9-.44L18.7 7.4a1.5 1.5 0 000-2.12l-.7-.7a1.5 1.5 0 00-2.13 0L4.42 16.02z"
                ></path>
            </g>
        </svg>
    `
})
export class SvgDropEditComponent {
    constructor() {}
}

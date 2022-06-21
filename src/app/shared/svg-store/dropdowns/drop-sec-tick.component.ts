import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'svg-drop-sec-tick',
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" aria-hidden="true">
            <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M4.902 6.975l4.182-4.244a.74.74 0 0 1 1.06 0 .775.775 0 0 1 0 1.081L5.432 8.597a.74.74 0 0 1-1.06 0L1.78 5.975a.775.775 0 0 1 0-1.081.74.74 0 0 1 1.061 0l2.06 2.081z"
            ></path>
        </svg>
    `
})
export class SvgDropSecTickComponent {
    constructor() {}
}

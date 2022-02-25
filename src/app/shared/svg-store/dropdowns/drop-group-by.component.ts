import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'svg-drop-group-by',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            svg {
                width: 100%;
                height: 100%;

                fill: #808080;
            }
        `
    ],
    template: `
        <svg viewBox="0 0 24 24">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 3a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h12zm0 1H6a2 2 0 00-1.995 1.85L4 6v12a2 2 0 001.85 1.994L6 20h12a2 2 0 001.994-1.85L20 18V6a2 2 0 00-1.85-1.995L18 4zm-3 4.5A1.5 1.5 0 0013.5 7h-5A1.5 1.5 0 007 8.5v5A1.5 1.5 0 008.5 15h5a1.5 1.5 0 001.5-1.5v-5zM8.5 8h5l.09.008A.5.5 0 0114 8.5v5l-.008.09a.5.5 0 01-.492.41h-5l-.09-.008A.5.5 0 018 13.5v-5l.008-.09A.5.5 0 018.5 8zm.585 8a1.5 1.5 0 001.415 1h5a1.5 1.5 0 001.5-1.5v-5a1.5 1.5 0 00-1-1.415V15.5a.5.5 0 01-.5.5H9.085z"
            ></path>
        </svg>
    `
})
export class SvgDropGroupByComponent {
    constructor() {}
}

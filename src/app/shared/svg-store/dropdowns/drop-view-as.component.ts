import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'svg-drop-view-as',
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
                d="M18 3a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h12zm0 1H6a2.001 2.001 0 00-1.995 1.85L4 6v12c0 1.054.816 1.918 1.85 1.995L6 20h12a2.001 2.001 0 001.995-1.85L20 18V6a2.001 2.001 0 00-1.85-1.995L18 4zm-1 11.5a.5.5 0 01.09.992L17 16.5H7a.5.5 0 01-.09-.992L7 15.5h10zm0-4a.5.5 0 01.09.992L17 12.5H7a.5.5 0 01-.09-.992L7 11.5h10zm0-4a.5.5 0 01.09.992L17 8.5H7a.5.5 0 01-.09-.992L7 7.5h10z"
            ></path>
        </svg>
    `
})
export class SvgDropViewAsComponent {
    constructor() {}
}

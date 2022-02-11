import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'svg-facebook-icon',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <svg
            width="16px"
            height="16px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 455.73 455.73"
            style="enable-background:new 0 0 455.73 455.73;"
            xml:space="preserve"
        >
            <path
                style="fill:#3A559F;"
                d="M0,0v455.73h242.704V279.691h-59.33v-71.864h59.33v-60.353c0-43.893,35.582-79.475,79.475-79.475
	h62.025v64.622h-44.382c-13.947,0-25.254,11.307-25.254,25.254v49.953h68.521l-9.47,71.864h-59.051V455.73H455.73V0H0z"
            />
        </svg>
    `,
})
export class FacebookIconComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

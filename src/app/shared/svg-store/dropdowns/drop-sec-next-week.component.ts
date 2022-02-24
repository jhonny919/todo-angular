import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'svg-drop-sec-next-week',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            svg {
                width: 100%;
                height: 100%;
            }

            @import 'vars';
            :host {
                position: relative;
                &:hover .description {
                    visibility: visible;
                }
            }
            .description {
                position: absolute;
                bottom: -35px;
                left: 50%;
                transform: translate(-50%);
                z-index: 99;

                padding: 4px 6px;
                background-color: #3d3d3d;
                color: #fafafa;
                border-radius: 3px;

                font-size: 0.8em;
                font-family: $gFont;
                font-weight: 500;
                white-space: nowrap;

                visibility: hidden;
            }
        `,
    ],
    template: `
        <svg viewBox="0 0 28 28">
            <g fill="#692FC2" fill-rule="nonzero">
                <path d="M6 3.5h16A2.5 2.5 0 0 1 24.5 6v2.5h-21V6A2.5 2.5 0 0 1 6 3.5z" opacity=".1"></path>
                <path
                    d="M22 3a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16zm0 1H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-3.109 12.188l.007.01-.004-.005-.003-.005zM21.5 8a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zM19 16.52a.504.504 0 0 1-.023.131l-.015.04a.494.494 0 0 1-.05.093l-.014.018a.503.503 0 0 1-.033.04l-3.511 3.512a.5.5 0 0 1-.765-.638l.057-.07L17.292 17H9.5a.5.5 0 0 1-.492-.41L9 16.5a.5.5 0 0 1 .41-.492L9.5 16h7.792l-2.646-2.646a.5.5 0 0 1 .638-.765l.07.057 3.511 3.513.017.019.009.01-.027-.03.03.035.029.04a.52.52 0 0 1 .066.162l.008.052v.007l-.002-.026.005.072v.02z"
                ></path>
            </g>
        </svg>

        <div class="description">Next week</div>
    `,
})
export class SvgDropSecNextWeekComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'svg-drop-sec-tomorrow',
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
            <g fill="#B26B0F" fill-rule="nonzero">
                <path d="M14 19a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" opacity=".1"></path>
                <path
                    d="M10.939 21.391a.5.5 0 0 1 .27.653L9.68 25.74a.5.5 0 1 1-.924-.383l1.53-3.695a.5.5 0 0 1 .654-.271zm6.776.27l1.53 3.696a.5.5 0 0 1-.923.383l-1.531-3.696a.5.5 0 0 1 .924-.382zM14 8a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm-7.391 9.061a.5.5 0 0 1-.27.654l-3.696 1.53a.5.5 0 0 1-.383-.923l3.696-1.531a.5.5 0 0 1 .653.27zm15.435-.27l3.696 1.53a.5.5 0 0 1-.383.924l-3.695-1.53a.5.5 0 1 1 .382-.924zM14 9a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM2.643 8.755l3.695 1.53a.5.5 0 1 1-.382.924L2.26 9.68a.5.5 0 1 1 .383-.924zm23.367.27a.5.5 0 0 1-.27.653l-3.696 1.531a.5.5 0 0 1-.382-.924l3.695-1.53a.5.5 0 0 1 .653.27zM9.678 2.26l1.531 3.696a.5.5 0 0 1-.924.382l-1.53-3.695a.5.5 0 1 1 .923-.383zm9.297-.27a.5.5 0 0 1 .27.653l-1.53 3.695a.5.5 0 1 1-.924-.382l1.53-3.696a.5.5 0 0 1 .654-.27z"
                ></path>
            </g>
        </svg>

        <div class="description">Tomorrow</div>
    `,
})
export class SvgDropSecTomorrowComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

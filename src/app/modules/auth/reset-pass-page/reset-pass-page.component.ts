import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-reset-pass-page',
    templateUrl: './reset-pass-page.component.html',
    styleUrls: ['./reset-pass-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPassPageComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

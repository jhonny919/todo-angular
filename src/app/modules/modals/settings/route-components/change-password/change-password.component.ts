import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangePasswordComponent {
    passIsVisible: boolean = false;

    constructor() {}
}

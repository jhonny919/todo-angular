import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-account-settings',
    templateUrl: './account-settings.component.html',
    styleUrls: ['./account-settings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountSettingsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

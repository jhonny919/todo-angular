import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { MODALS_ROUTE, OUTLETS, PAGES_ROUTE, SETTINGS_ROUTE } from '@core/nav-constants';

@Component({
    selector: 'app-account-settings',
    templateUrl: './account-settings.component.html',
    styleUrls: ['./account-settings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountSettingsComponent {
    constructor(private router: Router) {}

    changeEmail() {
        this.router.navigateByUrl(
            `/${PAGES_ROUTE.WORKSPACE}/(${OUTLETS.MODALS}:${MODALS_ROUTE.SETTINGS}/(${OUTLETS.SETTINGS_SPACE}:${SETTINGS_ROUTE.CHANGE_EMAIL}))`,
            {
                skipLocationChange: true
            }
        );
    }

    changePassword() {
        this.router.navigateByUrl(
            `/${PAGES_ROUTE.WORKSPACE}/(${OUTLETS.MODALS}:${MODALS_ROUTE.SETTINGS}/(${OUTLETS.SETTINGS_SPACE}:${SETTINGS_ROUTE.CHANGE_PASSWORD}))`,
            {
                skipLocationChange: true
            }
        );
    }

    deleteAccount() {
        console.log(this.router.url);
        this.router.navigateByUrl(
            `/${PAGES_ROUTE.WORKSPACE}/(${OUTLETS.MODALS}:${MODALS_ROUTE.SETTINGS}/(${OUTLETS.SETTINGS_SPACE}:${SETTINGS_ROUTE.DELETE_ACCOUNT}))`,
            {
                skipLocationChange: true
            }
        );
    }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-theme-settings',
    templateUrl: './theme-settings.component.html',
    styleUrls: ['./theme-settings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSettingsComponent {
    constructor() {}
}

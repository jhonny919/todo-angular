import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent {
    title: string = 'Account';

    constructor(private router: Router) {}

    onClose() {
        this.router.navigate([this.router.url]);
        console.log(this.router.url);
    }

    changeTitle(title: string) {
        this.title = title;
    }
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent {
    @Input() projID: number = 123;

    constructor() {}
}

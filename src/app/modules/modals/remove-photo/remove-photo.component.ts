import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-remove-photo',
    templateUrl: './remove-photo.component.html',
    styleUrls: ['./remove-photo.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RemovePhotoComponent {
    constructor() {}
}

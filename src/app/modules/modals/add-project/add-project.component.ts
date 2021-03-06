import { ProjectsService } from '@core/services/data/projects/projects.service';
import { ChangeDetectionStrategy, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AddProjectData } from '@app/core/types/projectType';

type projectType = 'List' | 'Board';

@Component({
    selector: 'app-add-project',
    templateUrl: './add-project.component.html',
    styleUrls: ['./add-project.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddProjectComponent implements OnInit {
    __addButtonDisabled: boolean = true;

    form = this.fb.group({
        title: '',
        colorCls: 'berryRed',
        type: 'List',
        favorites: false
    });

    constructor(private router: Router, private fb: FormBuilder, private projectsService: ProjectsService) {}

    ngOnInit(): void {
        this.form.get('title')?.valueChanges.subscribe((value) => (this.__addButtonDisabled = !value.length));
    }

    changeType(type: projectType) {
        this.form.patchValue({
            type: type
        });
    }

    onCancel() {
        this.router.navigateByUrl(this.router.url.replace('(', '').split('//')[0]);
    }

    onSave() {
        this.projectsService.addProject(this.form.value);
        this.router.navigateByUrl(this.router.url.replace('(', '').split('//')[0]);
    }
}

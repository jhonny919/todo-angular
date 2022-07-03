import { ChangeDetectionStrategy, Component } from '@angular/core';
import { v4 } from 'uuid';
import { tasksList } from '@mocks/tasksList';
import { sectionsList } from '@mocks/sectionsTasks';
import { AddSectionData, SectionData } from '@app/core/types/section';
import { AddTaskData, TaskData } from '@app/core/types/taskData';
import { DropdownSchema } from '@app/core/types/dropdown';

@Component({
    selector: 'app-today',
    templateUrl: './today.component.html',
    styleUrls: ['./today.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodayComponent {
    taskEditorState: boolean = false;
    date: number = Date.now();

    tasksList: TaskData[] = tasksList;
    sectionsList: SectionData[] = sectionsList;

    headerDropdownSchema: DropdownSchema = headerDropdownSchema;

    constructor() {}

    addTask(event: AddTaskData) {
        this.tasksList.push({
            taskID: v4(),
            taskName: event.taskName,
            taskDescription: event.taskDescription,
            isChecked: false,
            priority: event.priority
        });
    }

    addSection(event: AddSectionData) {
        this.sectionsList.push({
            id: v4(),
            title: event.sectionTitle,
            tasksList: []
        });
    }
}

const headerDropdownSchema: DropdownSchema = [
    {
        iconType: 'ADD_ABOVE',
        text: ''
    },
    {
        iconType: 'ADD_BELOW',
        text: ''
    },
    {
        iconType: 'GO_TO',
        text: ''
    },
    {
        iconType: 'EDIT',
        text: ''
    },
    {
        iconType: 'FAVORITES',
        text: ''
    },
    {
        iconType: 'ADD_SECTION',
        text: ''
    },
    {
        iconType: 'SHOW_TASK',
        text: ''
    },
    {
        iconType: 'HIDE_TASK',
        text: ''
    },
    {
        iconType: 'MOVE_TO',
        text: ''
    },
    {
        iconType: 'ARCHIVE',
        text: ''
    },
    {
        iconType: 'DEL',
        text: ''
    }
];

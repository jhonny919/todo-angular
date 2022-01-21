import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-todo-main',
    templateUrl: './todo-main.component.html',
    styleUrls: ['./todo-main.component.scss'],
})
export class TodoMainComponent implements OnInit {
    menuIsClosed: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    toggleMenuIsClosed() {
        this.menuIsClosed = !this.menuIsClosed;
        console.log(this.menuIsClosed);
    }
}

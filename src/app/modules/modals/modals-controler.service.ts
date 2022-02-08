import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ModalsControlerService {
    controler$ = new Subject<string>();

    CONSTS = {
        ADDPROJECT: 'addProject',
        ADDLABEL: 'addLabel',
        ADDFILTER: 'addFilter',
        SETTINGS: 'settings',
    };

    constructor() {}

    openAddProject() {
        this.controler$.next(this.CONSTS.ADDPROJECT);
    }

    openAddLabel() {
        this.controler$.next(this.CONSTS.ADDLABEL);
    }

    openAddFilter() {
        this.controler$.next(this.CONSTS.ADDFILTER);
    }

    openSettings() {
        this.controler$.next(this.CONSTS.SETTINGS);
    }

    closeModal() {
        this.controler$.next('');
    }

    getControler() {
        return this.controler$.asObservable();
    }
}

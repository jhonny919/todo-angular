import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgStoreModule } from '@shared/modules/svg-store/svg-store.module';

import { HeaderComponent } from './components/header/header.component';
import { TodoMainComponent } from './components/todo-main.component';
import { SearchComponent } from './components/search/search.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { MainPlaceComponent } from './components/main-place/main-place.component';

@NgModule({
    declarations: [HeaderComponent, TodoMainComponent, SearchComponent, LeftMenuComponent, MainPlaceComponent],
    exports: [TodoMainComponent],
    imports: [CommonModule, SvgStoreModule],
})
export class MainModule {}

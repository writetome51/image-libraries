import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppActionMenuComponent } from './app-action-menu.component';
import { MenuChoiceComponent } from './menu-choice/menu-choice.component';
import { StartDataProcessListItemModule }
	from '../start-data-process-list-item/start-data-process-list-item.module';


@NgModule({
	declarations: [AppActionMenuComponent, MenuChoiceComponent],
	imports: [
		CommonModule,
		StartDataProcessListItemModule,
	],
	exports: [AppActionMenuComponent]
})
export class AppActionMenuModule {
}

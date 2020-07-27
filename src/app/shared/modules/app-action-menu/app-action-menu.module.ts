import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppActionMenuComponent } from './app-action-menu.component';
import { MenuChoiceComponent } from './menu-choice/menu-choice.component';
import { ClickStartDataProcessListItemModule }
	from '@click-start-data-process-list-item/click-start-data-process-list-item.module';


@NgModule({
	declarations: [AppActionMenuComponent, MenuChoiceComponent],
	imports: [
		CommonModule,
		ClickStartDataProcessListItemModule,
	],
	exports: [AppActionMenuComponent]
})
export class AppActionMenuModule {
}

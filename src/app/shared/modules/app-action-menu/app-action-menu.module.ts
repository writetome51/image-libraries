import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppActionMenuComponent } from './app-action-menu.component';
import { MenuChoiceComponent } from './menu-choice/menu-choice.component';
import { StartDataProcessContentModule }
	from '../start-data-process-content/start-data-process-content.module';


@NgModule({
	declarations: [AppActionMenuComponent, MenuChoiceComponent],
	imports: [
		CommonModule,
		StartDataProcessContentModule,
	],
	exports: [AppActionMenuComponent]
})
export class AppActionMenuModule {
}

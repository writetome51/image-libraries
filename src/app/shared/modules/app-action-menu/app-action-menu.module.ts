import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppActionMenuComponent } from './app-action-menu.component';
import { MenuChoiceComponent } from './menu-choice/menu-choice.component';
import { StartDataProcessButtonModule }
	from '@start-data-process-button/start-data-process-button.module';


@NgModule({
	declarations: [AppActionMenuComponent, MenuChoiceComponent],
	imports: [
		CommonModule,
		StartDataProcessButtonModule
	],
	exports: [AppActionMenuComponent]
})
export class AppActionMenuModule {
}

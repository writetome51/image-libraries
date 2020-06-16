import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StartDataProcessButtonModule }
	from '../start-data-process-button/start-data-process-button.module';
import { AppActionMenuComponent } from './app-action-menu.component';


@NgModule({
	declarations: [AppActionMenuComponent],
	imports: [
		CommonModule,
		StartDataProcessButtonModule,
	],
	exports: [AppActionMenuComponent]
})
export class AppActionMenuModule {
}

import { ActionMenuModule } from '@action-menu/action-menu.module';
import { CommonModule } from '@angular/common';
import { GlobalActionMenuComponent }
	from './global-action-menu_component/global-action-menu.component';
import { NgModule } from '@angular/core';
import { GlobalActionMenuServicesModule } from './global-action-menu-services.module';


@NgModule({
	declarations: [GlobalActionMenuComponent],
	imports: [
		CommonModule,
		ActionMenuModule,
		GlobalActionMenuServicesModule
	],
	exports: [GlobalActionMenuComponent]
})
export class GlobalActionMenuModule {
}

import { ActionMenuModule } from '@action-menu_module/action-menu.module';
import { CommonModule } from '@angular/common';
import { GlobalActionMenuComponent } from './global-action-menu.component';
import { GlobalActionMenuServicesModule } from './global-action-menu-services.module';
import { NgModule } from '@angular/core';


@NgModule({
	declarations: [GlobalActionMenuComponent],
	imports: [
		CommonModule,
		ActionMenuModule,
		GlobalActionMenuServicesModule
	],
	exports: [GlobalActionMenuComponent]
})
export class GlobalActionMenuModule {}

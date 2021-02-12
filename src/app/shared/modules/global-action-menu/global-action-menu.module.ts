import { ActionMenuModule } from '@action-menu/action-menu.module';
import { CommonModule } from '@angular/common';
import { GlobalActionMenuComponent } from './global-action-menu.component';
import { NgModule } from '@angular/core';


@NgModule({
	declarations: [GlobalActionMenuComponent],
	imports: [CommonModule, ActionMenuModule],
	exports: [GlobalActionMenuComponent]
})
export class GlobalActionMenuModule {
}

import { ActionMenuModule } from '@action-menu/action-menu.module';
import { CommonModule } from '@angular/common';
import { GlobalActionMenuChoicesManagerService } from './global-action-menu-choices-manager.service';
import { GlobalActionMenuComponent } from './global-action-menu.component';
import { NgModule } from '@angular/core';


@NgModule({
	declarations: [GlobalActionMenuComponent],
	imports: [CommonModule, ActionMenuModule],
	providers: [GlobalActionMenuChoicesManagerService],
	exports: [GlobalActionMenuComponent]
})
export class GlobalActionMenuModule {
}

import { ActionMenuModule } from '@action-menu/action-menu.module';
import { GlobalActionMenuChoicesManagerService } from './global-action-menu-choices-manager.service';
import { GlobalActionMenuComponent } from './global-action-menu.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
	declarations: [GlobalActionMenuComponent],
	imports: [CommonModule, ActionMenuModule],
	providers: [GlobalActionMenuChoicesManagerService],
	exports: [GlobalActionMenuComponent]
})
export class GlobalActionMenuModule {
}

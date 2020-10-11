import { AppActionMenuChoicesManagerService } from './app-action-menu-choices-manager.service';
import { AppActionMenuComponent } from './app-action-menu.component';
import { CommonModule } from '@angular/common';
import { DropdownMenuModule } from '@app-action-menu/dropdown-menu/dropdown-menu.module';
import { HoverableContainerModule } from '@hoverable-container/hoverable-container.module';
import { MenuButtonModule } from '@app-action-menu/menu-button/menu-button.module';
import { NgModule } from '@angular/core';


@NgModule({
	declarations: [AppActionMenuComponent],
	imports: [CommonModule, DropdownMenuModule, MenuButtonModule, HoverableContainerModule],
	providers: [AppActionMenuChoicesManagerService],
	exports: [AppActionMenuComponent]
})
export class AppActionMenuModule {
}

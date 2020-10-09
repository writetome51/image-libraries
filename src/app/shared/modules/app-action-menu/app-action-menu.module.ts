import { AppActionMenuChoicesManagerService } from './app-action-menu-choices-manager.service';
import { AppActionMenuComponent } from './app-action-menu.component';
import { CommonModule } from '@angular/common';
import { DropdownMenuModule } from '@app-action-menu/dropdown-menu/dropdown-menu.module';
import { NgModule } from '@angular/core';
import { MenuButtonModule } from '@app-action-menu/menu-button/menu-button.module';


@NgModule({
	declarations: [AppActionMenuComponent],
	imports: [CommonModule, DropdownMenuModule, MenuButtonModule],
	providers: [AppActionMenuChoicesManagerService],
	exports: [AppActionMenuComponent]
})
export class AppActionMenuModule {
}

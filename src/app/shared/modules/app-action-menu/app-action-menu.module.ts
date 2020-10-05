import { AppActionMenuChoicesManagerService } from './app-action-menu-choices-manager.service';
import { AppActionMenuComponent } from './app-action-menu.component';
import { CommonModule } from '@angular/common';
import { DropdownMenuModule } from '@app-action-menu/dropdown-menu/dropdown-menu.module';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { NgModule } from '@angular/core';
import { SprocketWheelComponent } from './menu-button/sprocket-wheel.component';


@NgModule({
	declarations: [AppActionMenuComponent, SprocketWheelComponent, MenuButtonComponent],
	imports: [CommonModule, DropdownMenuModule],
	providers: [AppActionMenuChoicesManagerService],
	exports: [AppActionMenuComponent]
})
export class AppActionMenuModule {
}

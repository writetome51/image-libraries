import { AppActionMenuChoicesManagerService } from './app-action-menu-choices-manager.service';
import { AppActionMenuComponent } from './app-action-menu.component';
import { CommonModule } from '@angular/common';
import { MenuChoiceModule } from '@app-action-menu/menu-choice/menu-choice.module';
import { NgModule } from '@angular/core';


@NgModule({
	declarations: [AppActionMenuComponent],
	imports: [CommonModule, MenuChoiceModule],
	providers: [AppActionMenuChoicesManagerService],
	exports: [AppActionMenuComponent]
})
export class AppActionMenuModule {
}

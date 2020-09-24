import { ActionMenuChoicesManagerService } from './action-menu-choices-manager.service';
import { AppActionMenuComponent } from './app-action-menu.component';
import { CommonModule } from '@angular/common';
import { MenuChoiceComponent } from './menu-choice/menu-choice.component';
import { MenuChoiceProcessorService } from './menu-choice/menu-choice-processor.service';
import { NgModule } from '@angular/core';
import { StartDataProcessListItemModule }
	from '@start-data-process-list-item/start-data-process-list-item.module';


@NgModule({
	declarations: [AppActionMenuComponent, MenuChoiceComponent],
	imports: [CommonModule, StartDataProcessListItemModule],
	providers: [ActionMenuChoicesManagerService, MenuChoiceProcessorService],
	exports: [AppActionMenuComponent]
})
export class AppActionMenuModule {
}

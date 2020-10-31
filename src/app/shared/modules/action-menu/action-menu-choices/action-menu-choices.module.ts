import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteSelectedImagesProcessorService }
	from '@app/shared/modules/global-action-menu/delete-selected-images-processor/delete-selected-images-processor.service';
import { DeleteSelectedImagesResultInterpreterService }
	from '@app/shared/modules/global-action-menu/delete-selected-images-processor/delete-selected-images-result-interpreter.service';
import { ActionMenuChoicesComponent } from './action-menu-choices.component';
import { HoverableContainerModule } from '@hoverable-container/hoverable-container.module';
import { MenuChoiceComponent } from './menu-choice/menu-choice.component';
import { MenuChoiceProcessorService }
	from './menu-choice/menu-choice-processor.service';
import { RunTasksAfterDeletingImagesService }
	from '@app/shared/modules/global-action-menu/delete-selected-images-processor/run-tasks-after-deleting-images.service';
import { StartDataProcessListItemModule }
	from '@start-data-process-list-item/start-data-process-list-item.module';
import { SubmenuPointerComponent } from './menu-choice/submenu/submenu-pointer.component';
import { SubmenuComponent } from './menu-choice/submenu/submenu.component';


@NgModule({
	declarations: [
		ActionMenuChoicesComponent,
		MenuChoiceComponent,
		SubmenuPointerComponent,
		SubmenuComponent
	],
	imports: [CommonModule, StartDataProcessListItemModule, HoverableContainerModule],
	providers: [
		MenuChoiceProcessorService,
		DeleteSelectedImagesProcessorService,
		DeleteSelectedImagesResultInterpreterService,
		RunTasksAfterDeletingImagesService
	],
	exports: [ActionMenuChoicesComponent]
})
export class ActionMenuChoicesModule {
}

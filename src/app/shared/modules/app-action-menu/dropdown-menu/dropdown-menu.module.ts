import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuChoiceComponent } from '@app-action-menu/dropdown-menu/menu-choice/menu-choice.component';
import { SubmenuPointerComponent }
	from '@app-action-menu/dropdown-menu/menu-choice/submenu-pointer.component';
import { StartDataProcessListItemModule }
	from '@start-data-process-list-item/start-data-process-list-item.module';
import { MenuChoiceProcessorService }
	from './menu-choice/menu-choice-processor/menu-choice-processor.service';
import { DeleteSelectedImagesProcessorService }
	from './menu-choice/menu-choice-processor/delete-selected-images-processor/delete-selected-images-processor.service';
import { DeleteSelectedImagesResultInterpreterService }
	from './menu-choice/menu-choice-processor/delete-selected-images-processor/delete-selected-images-result-interpreter.service';
import { RunTasksAfterDeletingImagesService }
	from './menu-choice/menu-choice-processor/delete-selected-images-processor/run-tasks-after-deleting-images.service';
import { DropdownMenuComponent } from './dropdown-menu.component';


@NgModule({
	declarations: [DropdownMenuComponent, MenuChoiceComponent, SubmenuPointerComponent],
	imports: [CommonModule, StartDataProcessListItemModule],
	providers: [
		MenuChoiceProcessorService,
		DeleteSelectedImagesProcessorService,
		DeleteSelectedImagesResultInterpreterService,
		RunTasksAfterDeletingImagesService
	],
	exports: [DropdownMenuComponent]
})
export class DropdownMenuModule {
}

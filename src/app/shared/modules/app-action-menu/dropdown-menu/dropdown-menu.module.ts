import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteSelectedImagesProcessorService }
	from '@delete-selected-images-processor/delete-selected-images-processor.service';
import { DeleteSelectedImagesResultInterpreterService }
	from '@delete-selected-images-processor/delete-selected-images-result-interpreter.service';
import { DropdownMenuComponent } from './dropdown-menu.component';
import { MenuChoiceComponent } from '@menu-choice/menu-choice.component';
import { MenuChoiceProcessorService }
	from '@menu-choice/menu-choice-processor/menu-choice-processor.service';
import { RunTasksAfterDeletingImagesService }
	from '@delete-selected-images-processor/run-tasks-after-deleting-images.service';
import { SubmenuPointerComponent } from '@menu-choice/submenu-pointer.component';
import { StartDataProcessListItemModule }
	from '@start-data-process-list-item/start-data-process-list-item.module';


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

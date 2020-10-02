import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteSelectedImagesProcessorService }
	from './menu-choice-processor/delete-selected-images-processor/delete-selected-images-processor.service';
import { DeleteSelectedImagesResultInterpreterService }
	from './menu-choice-processor/delete-selected-images-processor/delete-selected-images-result-interpreter.service';
import { MenuChoiceComponent } from './menu-choice.component';
import { MenuChoiceProcessorService } from './menu-choice-processor/menu-choice-processor.service';
import { RunTasksAfterDeletingImagesService }
	from './menu-choice-processor/delete-selected-images-processor/run-tasks-after-deleting-images.service';
import { SubmenuPointerComponent } from './submenu-pointer.component';
import { StartDataProcessListItemModule }
	from '@start-data-process-list-item/start-data-process-list-item.module';


@NgModule({
	declarations: [MenuChoiceComponent, SubmenuPointerComponent],
	imports: [CommonModule, StartDataProcessListItemModule],
	providers: [
		MenuChoiceProcessorService,
		DeleteSelectedImagesProcessorService,
		DeleteSelectedImagesResultInterpreterService,
		RunTasksAfterDeletingImagesService
	],
	exports: [MenuChoiceComponent]
})
export class MenuChoiceModule {
}

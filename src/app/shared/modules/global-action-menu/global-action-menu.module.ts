import { ActionMenuModule } from '@action-menu/action-menu.module';
import { CommonModule } from '@angular/common';
import { DeleteSelectedImagesResultInterpreterService }
	from './delete-selected-images/delete-selected-images-processor/delete-selected-images-result-interpreter.service';
import { DeleteSelectedImagesProcessorService }
	from './delete-selected-images/delete-selected-images-processor/delete-selected-images-processor.service';
import { GetGlobalActionMenuChoicesService } from './get-global-action-menu-choices.service';
import { GlobalActionMenuChoicesExecutorService }
	from './global-action-menu-choices-executor.service';
import { GlobalActionMenuComponent } from './global-action-menu.component';
import { NgModule } from '@angular/core';
import { RunTasksAfterDeletingImagesService } // tslint:disable-next-line:max-line-length
	from './delete-selected-images/delete-selected-images-processor/run-tasks-after-deleting-images.service';
import { ToggleEnableMenuChoiceService }
	from '@global-action-menu/toggle-enable-menu-choice.service';
import { DeleteSelectedImagesService }
	from '@global-action-menu/delete-selected-images/delete-selected-images.service';


@NgModule({
	declarations: [GlobalActionMenuComponent],
	imports: [CommonModule, ActionMenuModule],
	providers: [
		GetGlobalActionMenuChoicesService,
		GlobalActionMenuChoicesExecutorService,
		DeleteSelectedImagesService,
		DeleteSelectedImagesResultInterpreterService,
		DeleteSelectedImagesProcessorService,
		RunTasksAfterDeletingImagesService,
		ToggleEnableMenuChoiceService
	],
	exports: [GlobalActionMenuComponent]
})
export class GlobalActionMenuModule {
}

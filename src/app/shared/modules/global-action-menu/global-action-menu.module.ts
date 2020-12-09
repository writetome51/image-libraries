import { ActionMenuModule } from '@action-menu/action-menu.module';
import { CommonModule } from '@angular/common';
import { DeleteSelectedImagesResultInterpreterService }
	from './delete-selected-images-processor/delete-selected-images-result-interpreter.service';
import { DeleteSelectedImagesProcessorService }
	from './delete-selected-images-processor/delete-selected-images-processor.service';
import { GlobalActionMenuChoicesManagerService } from './global-action-menu-choices-manager.service';
import { GlobalActionMenuChoicesProcessorService }
	from './global-action-menu-choices-processor.service';
import { GlobalActionMenuComponent } from './global-action-menu.component';
import { NgModule } from '@angular/core';
import { RunTasksAfterDeletingImagesService }
	from './delete-selected-images-processor/run-tasks-after-deleting-images.service';
import { ToggleZoomOnScrollingProcessorService } from './toggle-zoom-on-scrolling-processor.service';


@NgModule({
	declarations: [GlobalActionMenuComponent],
	imports: [CommonModule, ActionMenuModule],
	providers: [
		GlobalActionMenuChoicesManagerService,
		GlobalActionMenuChoicesProcessorService,
		DeleteSelectedImagesResultInterpreterService,
		DeleteSelectedImagesProcessorService,
		RunTasksAfterDeletingImagesService,
		ToggleZoomOnScrollingProcessorService
	],
	exports: [GlobalActionMenuComponent]
})
export class GlobalActionMenuModule {
}

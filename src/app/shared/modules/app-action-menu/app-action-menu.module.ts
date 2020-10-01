import { AppActionMenuChoicesManagerService } from './app-action-menu-choices-manager.service';
import { AppActionMenuComponent } from './app-action-menu.component';
import { CommonModule } from '@angular/common';
import { DeleteSelectedImagesProcessorService }
	from './menu-choice/delete-selected-images-processor/delete-selected-images-processor.service';
import { DeleteSelectedImagesResultInterpreterService } // tslint:disable-next-line:max-line-length
	from './menu-choice/delete-selected-images-processor/delete-selected-images-result-interpreter/delete-selected-images-result-interpreter.service';
import { MenuChoiceComponent } from './menu-choice/menu-choice.component';
import { MenuChoiceProcessorService } from './menu-choice/menu-choice-processor.service';
import { NgModule } from '@angular/core';
import { RunTasksAfterDeletingImagesService }
	from './menu-choice/delete-selected-images-processor/delete-selected-images-result-interpreter/run-tasks-after-deleting-images.service';
import { StartDataProcessListItemModule }
	from '@start-data-process-list-item/start-data-process-list-item.module';


@NgModule({
	declarations: [AppActionMenuComponent, MenuChoiceComponent],
	imports: [CommonModule, StartDataProcessListItemModule],
	providers: [
		AppActionMenuChoicesManagerService,
		MenuChoiceProcessorService,
		DeleteSelectedImagesProcessorService,
		DeleteSelectedImagesResultInterpreterService,
		RunTasksAfterDeletingImagesService
	],
	exports: [AppActionMenuComponent]
})
export class AppActionMenuModule {
}

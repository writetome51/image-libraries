import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { DeleteSelectedImagesProcessorService }
	from './delete-selected-images-processor/delete-selected-images-processor.service';
import { GlobalActionMenuServicesModule }
	from '@global-action-menu/global-action-menu-services-module/global-action-menu-services.module';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class ProcessDeleteSelectedImagesService implements IDoThis {

	constructor(
		private __deleteSelectedImagesProcessor: DeleteSelectedImagesProcessorService
	) {
	}


	async go() {
		await this.__deleteSelectedImagesProcessor.process();
	}

}

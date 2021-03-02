import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { ProcessDeleteSelectedImagesService }
	from './delete-selected-images-processor_service/process-delete-selected-images.service';
import { GlobalActionMenuServicesModule }
	from '@global-action-menu/global-action-menu-services.module';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class ProcessDeleteSelectedImagesService implements IDoThis {

	constructor(
		private __deleteSelectedImagesProcessor: ProcessDeleteSelectedImagesService
	) {
	}


	async go() {
		await this.__deleteSelectedImagesProcessor.go();
	}

}

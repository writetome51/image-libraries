import { DataTransportProcessorService }
	from '@services/processor-related/data-transport-processor.abstract.service';
import { InterpretDeleteSelectedImagesResultService }
	from './interpret-delete-selected-images-result_service/interpret-delete-selected-images-result.service';
import { Injectable } from '@angular/core';
import { DeleteSelectedImagesService } from './delete-selected-images.service';
import { GlobalActionMenuServicesModule }
	from '@global-action-menu/global-action-menu-services.module';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class DeleteSelectedImagesProcessorService extends DataTransportProcessorService {

	constructor(
		__getResult: DeleteSelectedImagesService,
		__interpretResult: InterpretDeleteSelectedImagesResultService
	) {
		super(__getResult, __interpretResult);
	}

}

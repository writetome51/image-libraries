import { ProcessDbOperationService }
	from '@process-related/process-db-operation.abstract.service';
import { InterpretDeleteSelectedImagesResultService }
	from './interpret-delete-selected-images-result_service/interpret-delete-selected-images-result.service';
import { Injectable } from '@angular/core';
import { DeleteSelectedImagesService } from './delete-selected-images.service';
import { GlobalActionMenuServicesModule }
	from '@global-action-menu/global-action-menu-services.module';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class ProcessDeleteSelectedImagesService extends ProcessDbOperationService {

	constructor(
		__getResult: DeleteSelectedImagesService,
		__interpretResult: InterpretDeleteSelectedImagesResultService
	) {
		super(__getResult, __interpretResult);
	}

}

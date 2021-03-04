import { Injectable } from '@angular/core';
import { ProcessDbOperationService }
	from '@services/process/process-db-operation.abstract.service';
import { GetAllImagesService } from './get-all-images.service';
import { AllImagesServicesModule } from '@app/routed-modules/all-images_module/all-images-services.module';
import { InterpretGetImagesResultService }
	from '@services/process/interpret-result/interpret-get-images-result_service/interpret-get-images-result.service';


@Injectable({providedIn: AllImagesServicesModule})
export class ProcessGetAllImagesService extends ProcessDbOperationService {

	constructor(
		__getResult: GetAllImagesService,
		__interpretResult: InterpretGetImagesResultService
	) {
		super(__getResult, __interpretResult);
	}

}

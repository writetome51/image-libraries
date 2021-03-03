import { Injectable } from '@angular/core';
import { ProcessDbOperationService }
	from '@process-related/process-db-operation.abstract.service';
import { GetAllImagesService } from './get-all-images.service';
import { AllImagesServicesModule } from '@app/routed-modules/all-images/all-images-services.module';
import { InterpretGetImagesResultService }
	from '@process-related/interpret-result/interpret-get-images-result/interpret-get-images-result.service';


@Injectable({providedIn: AllImagesServicesModule})
export class ProcessGetAllImagesService extends ProcessDbOperationService {

	constructor(
		__getResult: GetAllImagesService,
		__interpretResult: InterpretGetImagesResultService
	) {
		super(__getResult, __interpretResult);
	}

}

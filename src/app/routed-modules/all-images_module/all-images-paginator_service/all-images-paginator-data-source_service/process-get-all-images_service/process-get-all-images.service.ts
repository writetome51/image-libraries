import { Injectable } from '@angular/core';
import { ProcessDbOperationService } from '@process/process-db-operation.abstract.service';
import { GetAllImagesService } from './get-all-images.service';
import { AllImagesServicesModule } from '../../../all-images-services.module';
import { InterpretGetImagesResultService } from
'@interpret-result/interpret-get-images-result_service/interpret-get-images-result.service';
import { SetLoadedImages } from '@interfaces/set-loaded-images.interface';


@Injectable({providedIn: AllImagesServicesModule})
export class ProcessGetAllImagesService extends ProcessDbOperationService
	implements SetLoadedImages {

	constructor(
		__getResult: GetAllImagesService,
		__interpretResult: InterpretGetImagesResultService
	) {
		super(__getResult, __interpretResult);
	}

}

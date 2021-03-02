import { Injectable } from '@angular/core';
import { ProcessDataTransportService }
	from '@services/process-related/process-data-transport.abstract.service';
import { GetAllImagesService } from './get-all-images.service';
import { AllImagesServicesModule } from '@app/routed-modules/all-images/all-images-services.module';
import { InterpretGetImagesResultService } from '@services/process-related/interpret-get-images-result/interpret-get-images-result.service';


@Injectable({providedIn: AllImagesServicesModule})
export class ProcessGetAllImagesService extends ProcessDataTransportService {

	constructor(
		__getResult: GetAllImagesService,
		__interpretResult: InterpretGetImagesResultService
	) {
		super(__getResult, __interpretResult);
	}

}

import { Injectable } from '@angular/core';
import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { InterpretGetImagesResultService }
	from '@get-images-processor/get-images-result-interpreter/interpret-get-images-result.service';
import { GetAllImagesService } from './get-all-images.service';
import { AllImagesServicesModule } from '@app/routed-modules/all-images/all-images-services.module';


@Injectable({providedIn: AllImagesServicesModule})
export class GetAllImagesProcessorService extends DataTransportProcessorService {

	constructor(
		__getResult: GetAllImagesService,
		__interpretResult: InterpretGetImagesResultService
	) {
		super(__getResult, __interpretResult);
	}

}

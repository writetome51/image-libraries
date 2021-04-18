import { Injectable } from '@angular/core';
import { GetAllImagesService } from './get-all-images.service';
import { AllImagesServicesModule } from '../../../all-images-services.module';
import { InterpretGetImageRecordsResultService }
	from '@interpret-result/interpret-get-image-records-result_service/interpret-get-image-records-result.service';
import { ProcessThatSetsLoadedImagesService }
	from '@services/process-that-sets-loaded-images.service';


@Injectable({providedIn: AllImagesServicesModule})
export class ProcessGetAllImagesService extends ProcessThatSetsLoadedImagesService {

	constructor(
		__getImageRecords: GetAllImagesService,
		__interpretResult: InterpretGetImageRecordsResultService
	) {
		super(__getImageRecords, __interpretResult);
	}

}

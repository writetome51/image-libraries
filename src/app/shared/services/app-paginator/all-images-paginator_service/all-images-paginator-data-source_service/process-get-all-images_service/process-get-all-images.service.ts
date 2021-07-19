import { Injectable } from '@angular/core';
import { GetAllImagesService } from './get-all-images.service';
import { InterpretGetImageRecordsResultService }
	from '@interpret-result/interpret-get-image-records-result_service/interpret-get-image-records-result.service';
import { ProcessThatSetsLoadedImagesService }
	from '../../../process-that-sets-loaded-images.abstract.service';


@Injectable({providedIn: 'root'})
export class ProcessGetAllImagesService extends ProcessThatSetsLoadedImagesService {

	constructor(
		__getImageRecords: GetAllImagesService,
		__interpretResult: InterpretGetImageRecordsResultService
	) {
		super(__getImageRecords, __interpretResult);
	}

}

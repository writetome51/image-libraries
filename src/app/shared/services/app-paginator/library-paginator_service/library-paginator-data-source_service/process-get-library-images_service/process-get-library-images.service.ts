import { Injectable } from '@angular/core';
import { GetLibraryImagesService } from './get-library-images.service';
import { ProcessThatSetsLoadedImagesService }
	from '@process/process-that-sets-loaded-images.abstract.service';
import { InterpretGetImageRecordsResultService }
	from '@interpret-result/interpret-get-image-records-result_service/interpret-get-image-records-result.service';


@Injectable({providedIn: 'root'})
export class ProcessGetLibraryImagesService extends ProcessThatSetsLoadedImagesService {

	constructor(
		__getResult: GetLibraryImagesService,
		__interpretResult: InterpretGetImageRecordsResultService
	) {
		super(__getResult, __interpretResult);
	}

}

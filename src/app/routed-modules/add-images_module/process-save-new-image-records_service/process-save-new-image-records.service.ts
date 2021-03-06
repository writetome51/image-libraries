import { ProcessExistingUserDBOperationService }
	from '@process/process-existing-user-db-operation.abstract.service';
import { Injectable } from '@angular/core';
import { SaveNewImageRecordsService } from './save-new-image-records.service';
import { InterpretSaveNewImageRecordsResultService }
	from './interpret-save-new-image-records-result_service/interpret-save-new-image-records-result.service';
import { AddImagesServicesModule } from '../add-images-services.module';


@Injectable({providedIn: AddImagesServicesModule})
export class ProcessSaveNewImageRecordsService extends ProcessExistingUserDBOperationService {

	constructor(
		__getResult: SaveNewImageRecordsService,
		__interpretResult: InterpretSaveNewImageRecordsResultService
	) {
		super(__getResult, __interpretResult);
	}

}

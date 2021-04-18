import { ProcessSendFormDataService }
	from '@process/process-send-form-data.abstract.service';
import { ImageURLInputService } from '../image-url-input.service';
import { Injectable } from '@angular/core';
import { InterpretSaveNewImageRecordsResultService }
	from '../../interpret-save-new-image-records-result_service/interpret-save-new-image-records-result.service';
import { SaveImageURLService } from './save-image-url.service';
import { EnterImageURLServicesModule } from '../enter-image-url-services.module';


@Injectable({providedIn: EnterImageURLServicesModule})
export class ProcessSaveImageURLService extends ProcessSendFormDataService {

	constructor(
		__validatingInput: ImageURLInputService,
		__getResult: SaveImageURLService,
		__interpretResult: InterpretSaveNewImageRecordsResultService
	) {
		super(__validatingInput, __getResult, __interpretResult);
	}

}

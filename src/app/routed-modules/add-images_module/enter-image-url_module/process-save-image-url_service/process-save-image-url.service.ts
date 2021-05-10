import { ProcessSendFormDataService }
	from '@process/process-send-form-data.abstract.service';
import { ImageURLInputService } from '../image-url-input.service';
import { Injectable } from '@angular/core';
import { SaveImageURLService } from './save-image-url.service';
import { EnterImageURLServicesModule } from '../enter-image-url-services.module';
import { InterpretSaveImageURLResultService } from './interpret-save-image-url-result.service';


@Injectable({providedIn: EnterImageURLServicesModule})
export class ProcessSaveImageURLService extends ProcessSendFormDataService {

	constructor(
		__validatingInput: ImageURLInputService,
		__getResult: SaveImageURLService,
		__interpretResult: InterpretSaveImageURLResultService
	) {
		super(__validatingInput, __getResult, __interpretResult);
	}

}

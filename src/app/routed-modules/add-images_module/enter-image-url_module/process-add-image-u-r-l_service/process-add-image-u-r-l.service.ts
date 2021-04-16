import { ProcessSendFormDataToDbService }
	from '@process/process-send-form-data-to-db.abstract.service';
import { ImageURLInputService } from '../image-url-input.service';
import { Injectable } from '@angular/core';
import { InterpretSaveNewImagesResultService }
	from '../../interpret-save-new-images-result_service/interpret-save-new-images-result.service';
import { AddImageURLService } from './add-image-u-r-l.service';
import { EnterImageURLServicesModule } from '../enter-image-url-services.module';


@Injectable({providedIn: EnterImageURLServicesModule})
export class ProcessAddImageURLService extends ProcessSendFormDataToDbService {

	constructor(
		__validatingInput: ImageURLInputService,
		__getResult: AddImageURLService,
		__interpretResult: InterpretSaveNewImagesResultService
	) {
		super(__validatingInput, __getResult, __interpretResult);
	}

}

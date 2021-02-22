import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.abstract.service';
import { ImageURLInputService } from '../image-url-input.service';
import { Injectable } from '@angular/core';
import { InterpretSaveNewImagesResultService }
	from '../../interpret-save-new-images-result_service/interpret-save-new-images-result.service';
import { AddImageURLService } from './add-image-url.service';
import { EnterImageURLServicesModule } from '../enter-image-url-services.module';


@Injectable({providedIn: EnterImageURLServicesModule})
export class AddImageURLProcessorService extends FormDataTransportProcessorService {

	constructor(
		__validatingInput: ImageURLInputService,
		__getResult: AddImageURLService,
		__interpretResult: InterpretSaveNewImagesResultService
	) {
		super(__validatingInput, __getResult, __interpretResult);
	}

}

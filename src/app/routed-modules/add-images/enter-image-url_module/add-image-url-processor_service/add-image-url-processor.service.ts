import { FormDataTransportProcessorService }
	from '@data-transport-processor/form-data-transport-processor.service';
import { ImageURLInputService } from '../image-url-input.service';
import { Injectable } from '@angular/core';
import { InterpretSaveNewImagesResultService }
	from '../../save-new-images-result-interpreter_service/interpret-save-new-images-result.service';
import { AddImageURLService } from './add-image-url.service';
import { AddImagesServicesModule } from '@app/routed-modules/add-images/add-images-services.module';


@Injectable({providedIn: AddImagesServicesModule})
export class AddImageURLProcessorService extends FormDataTransportProcessorService {

	constructor(
		__validatingInput: ImageURLInputService,
		__getResult: AddImageURLService,
		__interpretResult: InterpretSaveNewImagesResultService
	) {
		super(__validatingInput, __getResult, __interpretResult);
	}

}

import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { Injectable } from '@angular/core';
import { SaveNewImagesService } from '../save-new-images.service';
import { InterpretSaveNewImagesResultService }
	from '../save-new-images-result-interpreter_service/interpret-save-new-images-result.service';
import { AddImagesServicesModule } from '@app/routed-modules/add-images/add-images-services.module';


@Injectable({providedIn: AddImagesServicesModule})
export class SaveNewImagesProcessorService extends DataTransportProcessorService {

	constructor(
		__getResult: SaveNewImagesService,
		__interpretResult: InterpretSaveNewImagesResultService
	) {
		super(__getResult, __interpretResult);
	}

}

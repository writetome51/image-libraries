import { ProcessDataTransportService }
	from '@services/process-related/process-data-transport.abstract.service';
import { Injectable } from '@angular/core';
import { SaveNewImagesService } from '../../save-new-images.service';
import { InterpretSaveNewImagesResultService }
	from '../../interpret-save-new-images-result_service/interpret-save-new-images-result.service';
import { AddImagesServicesModule } from '../../add-images-services.module';


@Injectable({providedIn: AddImagesServicesModule})
export class ProcessSaveNewImagesService extends ProcessDataTransportService {

	constructor(
		__getResult: SaveNewImagesService,
		__interpretResult: InterpretSaveNewImagesResultService
	) {
		super(__getResult, __interpretResult);
	}

}

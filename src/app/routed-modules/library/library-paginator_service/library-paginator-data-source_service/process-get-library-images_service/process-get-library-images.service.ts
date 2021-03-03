import { Injectable } from '@angular/core';
import { ProcessDbOperationService }
	from '@services/process/process-db-operation.abstract.service';
import { GetLibraryImagesService } from './get-library-images.service';
import { InterpretGetLibraryImagesResultService }
	from './interpret-get-library-images-result_service/interpret-get-library-images-result.service';
import { LibraryServicesModule } from '@app/routed-modules/library/library-services.module';


@Injectable({providedIn: LibraryServicesModule})
export class ProcessGetLibraryImagesService extends ProcessDbOperationService {

	constructor(
		__getResult: GetLibraryImagesService,
		__interpretResult: InterpretGetLibraryImagesResultService
	) {
		super(__getResult, __interpretResult);
	}

}

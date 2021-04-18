import { Injectable } from '@angular/core';
import { ProcessExistingUserDBOperationService } from '@process/process-existing-user-db-operation.abstract.service';
import { GetLibraryImagesService } from './get-library-images.service';
import { InterpretGetLibraryImagesResultService } from
'./interpret-get-library-images-result_service/interpret-get-library-images-result.service';
import { LibraryServicesModule } from '@app/routed-modules/library_module/library-services.module';
import { ProcessThatSetsLoadedImagesService } from '@services/process-that-sets-loaded-images.service';


@Injectable({providedIn: LibraryServicesModule})
export class ProcessGetLibraryImagesService extends ProcessExistingUserDBOperationService
	implements ProcessThatSetsLoadedImagesService {

	constructor(
		__getResult: GetLibraryImagesService,
		__interpretResult: InterpretGetLibraryImagesResultService
	) {
		super(__getResult, __interpretResult);
	}

}

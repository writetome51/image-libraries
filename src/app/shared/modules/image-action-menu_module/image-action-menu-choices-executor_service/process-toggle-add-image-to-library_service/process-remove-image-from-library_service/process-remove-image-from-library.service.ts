import { Injectable } from '@angular/core';
import { ProcessExistingUserDBOperationService } from '@process/process-existing-user-db-operation.abstract.service';
import { InterpretRemoveImageFromLibraryResultService }
	from './interpret-remove-image-from-library-result_service/interpret-remove-image-from-library-result.service';
import { RemoveImageFromLibraryService } from './remove-image-from-library.service';
import { ImageActionMenuServicesModule } from '../../../image-action-menu-services.module';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class ProcessRemoveImageFromLibraryService extends ProcessExistingUserDBOperationService {

	constructor(
		__getResult: RemoveImageFromLibraryService,
		__interpretResult: InterpretRemoveImageFromLibraryResultService
	) {
		super(__getResult, __interpretResult);
	}

}

import { Injectable } from '@angular/core';
import { ProcessDbOperationService }
	from '@services/process/process-db-operation.abstract.service';
import { InterpretRemoveImageFromLibraryResultService }
	from './interpret-remove-image-from-library-result_service/interpret-remove-image-from-library-result.service';
import { RemoveImageFromLibraryService } from './remove-image-from-library.service';
import { ImageActionMenuServicesModule }
	from '@app/shared/modules/image-action-menu_module/image-action-menu-services.module';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class ProcessRemoveImageFromLibraryService extends ProcessDbOperationService {

	constructor(
		__getResult: RemoveImageFromLibraryService,
		__interpretResult: InterpretRemoveImageFromLibraryResultService
	) {
		super(__getResult, __interpretResult);
	}

}

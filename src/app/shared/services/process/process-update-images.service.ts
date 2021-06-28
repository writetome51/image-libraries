import { ProcessExistingUserDBOperationService }
	from '@process/process-existing-user-db-operation.abstract.service';
import { Injectable } from '@angular/core';
import { InterpretUpdateLibraryResultService }
	from '@interpret-result/interpret-update-library-result.service';
import { UpdateImagesService } from '@db/update-images.service';


@Injectable({providedIn: 'root'})
export class ProcessUpdateImagesService extends ProcessExistingUserDBOperationService {

	constructor(
		__getResult: UpdateImagesService,
		__interpretResult: InterpretUpdateLibraryResultService
	) {
		super(__getResult, __interpretResult);
	}

}

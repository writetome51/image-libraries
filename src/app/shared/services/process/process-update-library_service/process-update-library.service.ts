import { ProcessExistingUserDBOperationService }
	from '@process/process-existing-user-db-operation.abstract.service';
import { Injectable } from '@angular/core';
import { UpdateLoadedLibraryService } from './update-loaded-library.service';
import { InterpretUpdateLibraryResultService }
	from './interpret-update-library-result_service/interpret-update-library-result.service';


@Injectable({providedIn: 'root'})
export class ProcessUpdateLibraryService extends ProcessExistingUserDBOperationService {

	constructor(
		__getResult: UpdateLoadedLibraryService,
		__interpretResult: InterpretUpdateLibraryResultService
	) {
		super(__getResult, __interpretResult);
	}

}

import { DeleteLibraryService } from './delete-library.service';
import { DeleteLibraryButtonServicesModule } from '../delete-library-button-services.module';
import { InterpretDeleteLibraryResultService }
	from './interpret-delete-library-result_service/interpret-delete-library-result.service';
import { Injectable } from '@angular/core';
import { ProcessService } from '@process/process.abstract.service';


@Injectable({providedIn: DeleteLibraryButtonServicesModule})
export class ProcessDeleteLibraryService extends ProcessService {

	constructor(
		__getResult: DeleteLibraryService,
		__interpretResult: InterpretDeleteLibraryResultService
	) {
		super(__getResult, __interpretResult);
	}

}

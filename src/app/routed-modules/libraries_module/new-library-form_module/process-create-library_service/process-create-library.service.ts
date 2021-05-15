import { InterpretCreateLibraryResultService }
	from './interpret-create-library-result_service/interpret-create-library-result.service';
import { CreateLibraryService } from './create-library.service';
import { Injectable } from '@angular/core';
import { NewLibraryFormServicesModule } from '../new-library-form-services.module';
import { ProcessService } from '@process/process.abstract.service';


@Injectable({providedIn: NewLibraryFormServicesModule})
export class ProcessCreateLibraryService extends ProcessService {

	constructor(
		__getResult: CreateLibraryService,
		__interpretResult: InterpretCreateLibraryResultService
	) {
		super(__getResult, __interpretResult);
	}

}

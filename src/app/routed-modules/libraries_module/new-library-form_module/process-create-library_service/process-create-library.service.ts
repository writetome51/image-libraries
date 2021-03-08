import { InterpretCreateLibraryResultService }
	from './interpret-create-library-result_service/interpret-create-library-result.service';
import { CreateLibraryService } from './create-library.service';
import { ProcessSendFormDataToDbService }
	from '@process/process-send-form-data-to-db.abstract.service';
import { Injectable } from '@angular/core';
import { LibraryNameInputService } from '../library-name-input.service';
import { NewLibraryFormServicesModule } from '../new-library-form-services.module';


@Injectable({providedIn: NewLibraryFormServicesModule})
export class ProcessCreateLibraryService extends ProcessSendFormDataToDbService {

	constructor(
		__validatingInput: LibraryNameInputService,
		__getResult: CreateLibraryService,
		__interpretResult: InterpretCreateLibraryResultService
	) {
		super(__validatingInput, __getResult, __interpretResult);
	}

}

import { InterpretCreateLibraryResultService }
	from './interpret-create-library-result_service/interpret-create-library-result.service';
import { CreateLibraryService } from './create-library.service';
import { ProcessSaveFormDataToDbService }
	from '@services/process/process-save-form-data-to-db.abstract.service';
import { Injectable } from '@angular/core';
import { LibraryNameInputService } from '../library-name-input.service';
import { NewLibraryFormServicesModule } from '../new-library-form-services.module';


@Injectable({providedIn: NewLibraryFormServicesModule})
export class ProcessCreateLibraryService extends ProcessSaveFormDataToDbService {

	constructor(
		__validatingInput: LibraryNameInputService,
		__getResult: CreateLibraryService,
		__interpretResult: InterpretCreateLibraryResultService
	) {
		super(__validatingInput, __getResult, __interpretResult);
	}

}

import { InterpretCreateLibraryResultService }
	from './interpret-create-library-result_service/interpret-create-library-result.service';
import { CreateLibraryService } from './create-library.service';
import { Injectable } from '@angular/core';
import { LibraryNameInputService } from '../library-name-input.service';
import { NewLibraryFormServicesModule } from '../new-library-form-services.module';
import { ProcessService } from '@process/process.abstract.service';
import { SendFormData } from '@interfaces/send-form-data.interface';


@Injectable({providedIn: NewLibraryFormServicesModule})
export class ProcessCreateLibraryService extends ProcessService implements SendFormData {

	constructor(
		public $_validatingInputs: LibraryNameInputService,
		__getResult: CreateLibraryService,
		__interpretResult: InterpretCreateLibraryResultService
	) {
		super(__getResult, __interpretResult);
	}

}

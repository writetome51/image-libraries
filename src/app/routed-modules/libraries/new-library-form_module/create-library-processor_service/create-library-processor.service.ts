import { InterpretCreateLibraryResultService }
	from './interpret-create-library-result_service/interpret-create-library-result.service';
import { CreateLibraryService } from './create-library.service';
import { FormDataTransportProcessorService }
	from '@services/processor-related/form-data-transport-processor.abstract.service';
import { Injectable } from '@angular/core';
import { LibraryNameInputService } from '../library-name-input.service';
import { NewLibraryFormServicesModule } from '../new-library-form-services.module';


@Injectable({providedIn: NewLibraryFormServicesModule})
export class CreateLibraryProcessorService extends FormDataTransportProcessorService {

	constructor(
		__validatingInput: LibraryNameInputService,
		__getResult: CreateLibraryService,
		__interpretResult: InterpretCreateLibraryResultService
	) {
		super(__validatingInput, __getResult, __interpretResult);
	}

}

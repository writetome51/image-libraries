import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { DeleteLibraryResultInterpreterService }
	from './delete-library-result-interpreter/delete-library-result-interpreter.service';
import { Injectable } from '@angular/core';
import { DeleteLibraryService } from './delete-library.service';
import { LibraryServicesModule } from '@app/routed-modules/library/library-services.module';


@Injectable({providedIn: LibraryServicesModule})
export class DeleteLibraryProcessorService extends DataTransportProcessorService {

	constructor(
		__getResult: DeleteLibraryService,
		__resultInterpreter: DeleteLibraryResultInterpreterService
	) {
		super(__getResult, __resultInterpreter);
	}

}

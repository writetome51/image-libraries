import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { InterpretDeleteLibraryResultService }
	from './delete-library-result-interpreter_service/interpret-delete-library-result.service';
import { Injectable } from '@angular/core';
import { DeleteLibraryService } from './delete-library.service';
import { LibraryServicesModule } from '@app/routed-modules/library/library-services.module';


@Injectable({providedIn: LibraryServicesModule})
export class DeleteLibraryProcessorService extends DataTransportProcessorService {

	constructor(
		__getResult: DeleteLibraryService,
		__interpretResult: InterpretDeleteLibraryResultService
	) {
		super(__getResult, __interpretResult);
	}

}

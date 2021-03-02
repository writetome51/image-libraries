import { ProcessDataTransportService }
	from '@services/process-related/process-data-transport.abstract.service';
import { InterpretDeleteLibraryResultService }
	from './interpret-delete-library-result_service/interpret-delete-library-result.service';
import { Injectable } from '@angular/core';
import { DeleteLibraryService } from './delete-library.service';
import { DeleteLibraryButtonServicesModule } from '../delete-library-button-services.module';


@Injectable({providedIn: DeleteLibraryButtonServicesModule})
export class ProcessDeleteLibraryService extends ProcessDataTransportService {

	constructor(
		__getResult: DeleteLibraryService,
		__interpretResult: InterpretDeleteLibraryResultService
	) {
		super(__getResult, __interpretResult);
	}

}

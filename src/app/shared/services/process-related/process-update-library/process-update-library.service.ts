import { ProcessDataTransportService }
	from '@services/process-related/process-data-transport.abstract.service';
import { Injectable } from '@angular/core';
import { UpdateLoadedLibraryService } from './update-loaded-library.service';
import { InterpretUpdateLibraryResultService }
	from './interpret-update-library-result.service';


@Injectable({providedIn: 'root'})
export class ProcessUpdateLibraryService extends ProcessDataTransportService {

	constructor(
		__getResult: UpdateLoadedLibraryService,
		__interpretResult: InterpretUpdateLibraryResultService
	) {
		super(__getResult, __interpretResult);
	}

}

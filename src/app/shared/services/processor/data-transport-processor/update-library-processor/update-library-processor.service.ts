import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.abstract.service';
import { Injectable } from '@angular/core';
import { UpdateLoadedLibraryService } from './update-loaded-library.service';
import { InterpretUpdateLibraryResultService }
	from './interpret-update-library-result.service';


@Injectable({providedIn: 'root'})
export class UpdateLibraryProcessorService extends DataTransportProcessorService {

	constructor(
		__getResult: UpdateLoadedLibraryService,
		__interpretResult: InterpretUpdateLibraryResultService
	) {
		super(__getResult, __interpretResult);
	}

}

import { AddImageToLibraryResultInterpreterService }
	from './add-image-to-library-result-interpreter/add-image-to-library-result-interpreter.service';
import { AddImageToLibraryService } from './add-image-to-library.service';
import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { Injectable } from '@angular/core';
import { ImageActionMenuServicesModule } from '../../../image-action-menu-services.module';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class AddImageToLibraryProcessorService extends DataTransportProcessorService {

	constructor(
		__getResult: AddImageToLibraryService,
		__resultInterpreter: AddImageToLibraryResultInterpreterService
	) {
		super(__getResult, __resultInterpreter);
	}

}

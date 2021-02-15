import { Injectable } from '@angular/core';
import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { RemoveImageFromLibraryResultInterpreterService }
	from './remove-image-from-library-result-interpreter/remove-image-from-library-result-interpreter.service';
import { RemoveImageFromLibraryService } from './remove-image-from-library.service';
import { ImageActionMenuServicesModule } from '@thumbnail-image-container/image-action-menu/image-action-menu-services-module/image-action-menu-services.module';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class RemoveImageFromLibraryProcessorService extends DataTransportProcessorService {

	constructor(
		__getResult: RemoveImageFromLibraryService,
		__resultInterpreter: RemoveImageFromLibraryResultInterpreterService
	) {
		super(__getResult, __resultInterpreter);
	}

}

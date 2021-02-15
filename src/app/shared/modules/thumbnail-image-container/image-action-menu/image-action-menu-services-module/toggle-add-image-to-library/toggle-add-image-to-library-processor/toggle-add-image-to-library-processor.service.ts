import { Injectable } from '@angular/core';
import { ProcessorService } from '@processor/processor.service';
import { ToggleAddImageToLibraryResultInterpreterService }
	// tslint:disable-next-line:max-line-length
	from './toggle-add-image-to-library-result-interpreter/toggle-add-image-to-library-result-interpreter.service';
import { ToggleAddImageToLibraryService } from './toggle-add-image-to-library.service';
import { ImageActionMenuServicesModule } from '../../image-action-menu-services.module';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class ToggleAddImageToLibraryProcessorService extends ProcessorService {

	constructor(
		__getResult: ToggleAddImageToLibraryService,
		__resultInterpreter: ToggleAddImageToLibraryResultInterpreterService
	) {
		super(__getResult, __resultInterpreter);
	}

}

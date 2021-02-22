import { Injectable } from '@angular/core';
import { ProcessorService } from '@services/processor-related/processor.abstract.service';
import { InterpretToggleAddImageToLibraryResultService }
	// tslint:disable-next-line:max-line-length
	from './interpret-toggle-add-image-to-library-result/interpret-toggle-add-image-to-library-result.service';
import { ToggleAddImageToLibraryService } from './toggle-add-image-to-library.service';
import { ImageActionMenuServicesModule } from '../../../image-action-menu-services.module';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class ToggleAddImageToLibraryProcessorService extends ProcessorService {

	constructor(
		__getResult: ToggleAddImageToLibraryService,
		__interpretResult: InterpretToggleAddImageToLibraryResultService
	) {
		super(__getResult, __interpretResult);
	}

}

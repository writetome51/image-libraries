import { ImageActionMenuServicesModule } from '../../image-action-menu-services.module';
import { Injectable } from '@angular/core';
import { InterpretToggleAddImageToLibraryResultService }
	// tslint:disable-next-line:max-line-length
	from './interpret-toggle-add-image-to-library-result_service/interpret-toggle-add-image-to-library-result.service';
import { ProcessService } from '@process/process.abstract.service';
import { ToggleAddImageToLibraryService } from './toggle-add-image-to-library.service';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class ProcessToggleAddImageToLibraryService extends ProcessService {

	constructor(
		__getResult: ToggleAddImageToLibraryService,
		__interpretResult: InterpretToggleAddImageToLibraryResultService
	) {
		super(__getResult, __interpretResult);
	}

}

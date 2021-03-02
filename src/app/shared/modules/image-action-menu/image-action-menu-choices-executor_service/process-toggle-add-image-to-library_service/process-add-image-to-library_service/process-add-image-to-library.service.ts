import { InterpretAddImageToLibraryResultService }
	from './interpret-add-image-to-library-result_service/interpret-add-image-to-library-result.service';
import { AddImageToLibraryService } from './add-image-to-library.service';
import { ProcessDataTransportService }
	from '@process-related/process-data-transport.abstract.service';
import { Injectable } from '@angular/core';
import { ImageActionMenuServicesModule } from '../../../image-action-menu-services.module';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class ProcessAddImageToLibraryService extends ProcessDataTransportService {

	constructor(
		__getResult: AddImageToLibraryService,
		__interpretResult: InterpretAddImageToLibraryResultService
	) {
		super(__getResult, __interpretResult);
	}

}

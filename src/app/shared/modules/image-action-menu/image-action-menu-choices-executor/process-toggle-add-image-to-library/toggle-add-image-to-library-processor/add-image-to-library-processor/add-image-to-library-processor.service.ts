import { InterpretAddImageToLibraryResultService }
	from './interpret-add-image-to-library-result/interpret-add-image-to-library-result.service';
import { AddImageToLibraryService } from './add-image-to-library.service';
import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.abstract.service';
import { Injectable } from '@angular/core';
import { ImageActionMenuServicesModule } from '../../../../image-action-menu-services.module';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class AddImageToLibraryProcessorService extends DataTransportProcessorService {

	constructor(
		__getResult: AddImageToLibraryService,
		__interpretResult: InterpretAddImageToLibraryResultService
	) {
		super(__getResult, __interpretResult);
	}

}

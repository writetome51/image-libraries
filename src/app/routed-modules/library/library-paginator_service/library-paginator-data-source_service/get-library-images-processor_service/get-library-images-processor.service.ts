import { Injectable } from '@angular/core';
import { DataTransportProcessorService }
	from '@services/processor-related/data-transport-processor.abstract.service';
import { GetLibraryImagesService } from './get-library-images.service';
import { InterpretGetLibraryImagesResultService }
	from './get-library-images-result-interpreter_service/interpret-get-library-images-result.service';
import { LibraryServicesModule } from '@app/routed-modules/library/library-services.module';


@Injectable({providedIn: LibraryServicesModule})
export class GetLibraryImagesProcessorService extends DataTransportProcessorService {

	constructor(
		__getResult: GetLibraryImagesService,
		__interpretResult: InterpretGetLibraryImagesResultService
	) {
		super(__getResult, __interpretResult);
	}

}

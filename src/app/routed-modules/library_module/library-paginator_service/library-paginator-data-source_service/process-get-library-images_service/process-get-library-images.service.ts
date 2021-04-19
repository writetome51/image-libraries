import { Injectable } from '@angular/core';
import { GetLibraryImagesService } from './get-library-images.service';
import { InterpretGetLibraryImagesResultService } from
'./interpret-get-library-images-result_service/interpret-get-library-images-result.service';
import { LibraryServicesModule } from '@app/routed-modules/library_module/library-services.module';
import { ProcessThatSetsLoadedImagesService }
	from '@process/process-that-sets-loaded-images.abstract.service';


@Injectable({providedIn: LibraryServicesModule})
export class ProcessGetLibraryImagesService extends ProcessThatSetsLoadedImagesService {

	constructor(
		__getResult: GetLibraryImagesService,
		__interpretResult: InterpretGetLibraryImagesResultService
	) {
		super(__getResult, __interpretResult);
	}

}

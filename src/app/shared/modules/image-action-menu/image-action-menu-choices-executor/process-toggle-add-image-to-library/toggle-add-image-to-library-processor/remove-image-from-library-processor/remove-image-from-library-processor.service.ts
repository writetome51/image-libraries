import { Injectable } from '@angular/core';
import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.abstract.service';
import { InterpretRemoveImageFromLibraryResultService }
	from './interpret-remove-image-from-library-result/interpret-remove-image-from-library-result.service';
import { RemoveImageFromLibraryService } from './remove-image-from-library.service';
import { ImageActionMenuServicesModule } from '@app/shared/modules/image-action-menu/image-action-menu-services.module';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class RemoveImageFromLibraryProcessorService extends DataTransportProcessorService {

	constructor(
		__getResult: RemoveImageFromLibraryService,
		__interpretResult: InterpretRemoveImageFromLibraryResultService
	) {
		super(__getResult, __interpretResult);
	}

}

import { Injectable } from '@angular/core';
import { ProcessExistingUserDBOperationService }
	from '@process/process-existing-user-db-operation.abstract.service';
import { InterpretRemoveImagesFromLibraryResultService }
	from './interpret-remove-images-from-library-result.service';
import { RemoveImagesFromLibraryService } from './remove-images-from-library.service';
import { ImageActionMenuServicesModule } from '../../../image-action-menu-services.module';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class ProcessRemoveImagesFromLibraryService extends ProcessExistingUserDBOperationService {

	constructor(
		__getResult: RemoveImagesFromLibraryService,
		__interpretResult: InterpretRemoveImagesFromLibraryResultService
	) {
		super(__getResult, __interpretResult);
	}

}

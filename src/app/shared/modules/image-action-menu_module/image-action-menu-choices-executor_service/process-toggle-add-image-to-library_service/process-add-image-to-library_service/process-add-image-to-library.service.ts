import { InterpretAddImageToLibraryResultService }
	from './interpret-add-image-to-library-result_service/interpret-add-image-to-library-result.service';
import { AddImageToLibraryService } from './add-image-to-library.service';
import { ProcessDbOperationService } from '@process/process-db-operation.abstract.service';
import { Injectable } from '@angular/core';
import { ImageActionMenuServicesModule } from '../../../image-action-menu-services.module';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class ProcessAddImageToLibraryService extends ProcessDbOperationService {

	constructor(
		__getResult: AddImageToLibraryService,
		__interpretResult: InterpretAddImageToLibraryResultService
	) {
		super(__getResult, __interpretResult);
	}

}

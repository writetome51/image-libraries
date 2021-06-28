import { ProcessExistingUserDBOperationService }
	from '@process/process-existing-user-db-operation.abstract.service';
import { Injectable } from '@angular/core';
import { ChangeLibraryImagesOrderService } from './change-library-images-order.service';
import { InterpretChangeLibraryImagesOrderResultService }
	from './interpret-change-library-images-order-result.service';


@Injectable({providedIn: 'root'})
export class ProcessChangeLibraryImagesOrderService extends ProcessExistingUserDBOperationService {

	constructor(
		__getResult: ChangeLibraryImagesOrderService,
		__interpretResult: InterpretChangeLibraryImagesOrderResultService
	) {
		super(__getResult, __interpretResult);
	}

}

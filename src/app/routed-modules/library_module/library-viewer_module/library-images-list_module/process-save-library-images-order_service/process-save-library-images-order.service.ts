import { ProcessExistingUserDBOperationService }
	from '@process/process-existing-user-db-operation.abstract.service';
import { Injectable } from '@angular/core';
import { SaveLibraryImagesOrderService }
	from './save-library-images-order_service/save-library-images-order.service';
import { InterpretSaveLibraryImagesOrderResultService }
	from './interpret-save-library-images-order-result.service';
import { LibraryImagesListServicesModule } from '../library-images-list-services.module';


@Injectable({providedIn: LibraryImagesListServicesModule})
export class ProcessSaveLibraryImagesOrderService extends ProcessExistingUserDBOperationService {

	constructor(
		__getResult: SaveLibraryImagesOrderService,
		__interpretResult: InterpretSaveLibraryImagesOrderResultService
	) {
		super(__getResult, __interpretResult);
	}

}

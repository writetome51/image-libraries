import { StoreImageFilesService } from './store-image-files.service';
import { ProcessService } from '@process/process.abstract.service';
import { InterpretStoreImageFilesResultService }
	from './interpret-store-image-files-result_service/interpret-store-image-files-result.service';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class ProcessStoreImageFilesService extends ProcessService {

	constructor(
		__getResult: StoreImageFilesService,
		__interpretResult: InterpretStoreImageFilesResultService
	) {
		super(__getResult, __interpretResult);
	}

}

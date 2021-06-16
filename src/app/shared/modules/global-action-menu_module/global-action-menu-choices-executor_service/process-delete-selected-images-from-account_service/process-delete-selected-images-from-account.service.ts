import { ProcessService } from '@process/process.abstract.service';
import { InterpretDeleteSelectedImagesFromAccountResultService }
	from './interpret-delete-selected-images-from-account-result_service/interpret-delete-selected-images-from-account-result.service';
import { Injectable } from '@angular/core';
import { DeleteSelectedImagesFromAccountService } from './delete-selected-images-from-account.service';
import { GlobalActionMenuServicesModule }
	from '@global-action-menu_module/global-action-menu-services.module';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class ProcessDeleteSelectedImagesFromAccountService extends ProcessService {

	constructor(
		__getResult: DeleteSelectedImagesFromAccountService,
		__interpretResult: InterpretDeleteSelectedImagesFromAccountResultService
	) {
		super(__getResult, __interpretResult);
	}

}
